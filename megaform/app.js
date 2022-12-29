function data_update(elem, text, value) {
  let elem_type = elem.tagName + ((elem.type !== undefined) ? '.' + elem.type : "")
  switch(elem_type){
    case "METER":
      elem.setAttribute("aria-valuenow", elem.value)
      elem.setAttribute("aria-valuetext", text)
      elem.setAttribute("aria-valuemin", elem.getAttribute("min"))
      elem.setAttribute("aria-valuemax", elem.getAttribute("max"))
      break;
    case "PROGRESS":
      elem.setAttribute("aria-valuenow", value)
      elem.setAttribute("aria-valuetext", text)
      elem.setAttribute("aria-valuemin", elem.getAttribute("min"))
      elem.setAttribute("aria-valuemax", elem.getAttribute("max"))
      break;
    case "INPUT.range":
      elem.setAttribute("aria-valuenow", value)
      elem.setAttribute("aria-valuetext", text)
      break;
    case "INPUT.color":
      elem.setAttribute("aria-valuetext", text)
      break;
    default:
     console.log("ERROR: " + elem_type + " is not a valid element")
  }
}

let num_slider = document.getElementById("range")
let data_slider = document.getElementById("range_data")
let color_picker = document.getElementById("color")
let file_upload = document.getElementById("file")
let progress_bar = document.getElementById("progress")
let fuel_meter = document.getElementById("meter")


num_slider.addEventListener("input", function(){
  data_update(num_slider, (num_slider.value + "/" + num_slider.getAttribute("max")), num_slider.value)
})

data_slider.addEventListener("input", function(){
  data_update(data_slider, document.querySelector('#range_values option[value="' + data_slider.value + '"]').label, data_slider.value)
})

color_picker.addEventListener("input", function(){
  data_update(color_picker, color_picker.value)
})

data_update(num_slider, (num_slider.value + "/" + num_slider.getAttribute("max")), num_slider.value)
data_update(data_slider, document.querySelector('#range_values option[value="' + data_slider.value + '"]').label, data_slider.value)
data_update(color_picker, color_picker.value)
data_update(progress_bar, "100%", progress_bar.value)
data_update(fuel_meter, "100%", fuel_meter.value)

file_upload.addEventListener("input", function(){
  let file_data = document.getElementById("file_data")
  file_data.innerHTML = ""
  for (let file of file_upload.files) {
    let data = document.createElement("li")
    let line_break = document.createElement("br")
    data.innerHTML = file.name
    data.append(line_break)
    data.innerHTML += (file.type + " : " + (parseInt(file.size)  / 1000).toFixed(2)) + "kb"
    file_data.append(data)
  }
  file_data.setAttribute("aria-hiden", "false")
})

function progress_update() {
  let current_progress = progress_bar.value
  let addend = Math.round(Math.random() * 10)
  addend += (! (addend % 2)) ? 1 : 0
  addend += (! (addend % 3)) ? 2 : 0
  current_progress += addend
  current_progress = (current_progress < 100) ? current_progress : 100
  progress_bar.value = current_progress
  progress_bar.nextElementSibling.innerHTML = current_progress + '%'
  data_update(progress_bar, current_progress + '%', current_progress)
  if(current_progress < 100)  {
    window.setTimeout(function() {
      progress_update()
    }, addend * 90)
  }
  else {
    progress_bar.classList.add("complete")
    meter_update()
  }
}

function meter_update() {
  let current_level = fuel_meter.value
  let subtractor = Math.round(Math.random() * 100)
  let max = parseInt(fuel_meter.getAttribute("max"))
  subtractor -= (! (subtractor % 2)) ? Math.floor(subtractor / 3) : 0
  subtractor -= (! (subtractor % 3)) ? Math.ceil(subtractor / 2) : 0
  current_level -= subtractor
  current_level = (current_level > 0) ? current_level : 0
  fuel_meter.value = current_level
  fuel_meter.nextElementSibling.innerHTML = (current_level + '/' + max)

  let br = document.createElement("br")
  let current_percent = document.createElement("strong")
  let percent_value = Math.round((current_level / max) * 100)
  current_percent.innerHTML = percent_value + '%'
  data_update(fuel_meter, percent_value + '%', percent_value)

  fuel_meter.nextElementSibling.append(br)
  fuel_meter.nextElementSibling.append(current_percent)
  if(current_level)  {
    window.setTimeout(function() {
      meter_update()
    }, subtractor * 10)
  }
  else {
    for(let fieldset of Array.from(document.getElementsByTagName("fieldset")))
      fieldset.disabled = true
    fuel_meter.classList.add("depleted")
    fuel_meter.nextElementSibling.innerHTML = "OUT OF FUEL!"
  }
}



color_picker.value = color_picker.defaultValue
color_picker.removeAttribute("value")

for (let label of Array.from(document.getElementsByTagName("label"))) {
    if (label.hasAttribute("title"))
        label.setAttribute("aria-description", label.getAttribute("title"))
}


let timer_input = document.getElementById("hidden")
window.setInterval(function(){ timer_input.value = (parseInt(timer_input.value) + 1) }, 1000)

progress_update()