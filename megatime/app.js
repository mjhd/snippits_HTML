function format_label(data){
  let out = data.replaceAll("_", ' ')
  return out
}

function time_data_formatted(date_time_container, date_time_format_data){
  date_time_container.innerHTML = ""
  for(let data of date_time_format_data){
  	let row = document.createElement("tr")
    let label_cell = document.createElement("td")
    let data_cell = document.createElement("td")
    label_cell.innerText = data[0] + " : "
    data_cell.innerText = data[1]
		row.append(label_cell)
    row.append(data_cell)
    date_time_container.append(row)
  }
}

function date_time(date){
	let date_time_container = document.getElementById("time_data")
  let date_time_format_containers = Array.from(document.querySelectorAll("#time_data_formatted table"))
  let time_object = (date == "{NOW}") ? new Date() : new Date(date)

  /*
  	time_object.setDate(10)
    time_object.setFullYear(2021)
    time_object.setHours(11)
    time_object.setMilliseconds(340)
    time_object.setMinutes(37)
    time_object.setMonth(08)
    time_object.setSeconds(44)
    //time_object.setTime(time_object.getTime() + (300000))
    time_object.setUTCDate(10)
    time_object.setUTCFullYear(2021)
    time_object.setUTCHours(11)
    time_object.setUTCMilliseconds(340)
    time_object.setUTCMinutes(37)
    time_object.setUTCMonth(08)
    time_object.setUTCSeconds(44)
    time_object.setTime(time_object.getTime() + (300000))
  */

	let date_time_data = {}
  let date_time_output = []
  let date_time_data_utc = []
  let date_time_data_local = []
  let data_mumbai = time_object.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }).match(/^.*?\/(\d+).*?(\d+):.*(AM|PM)/)
  let date_time_data_mumbai = []
  let data_honolulu = time_object.toLocaleString('en-US', { timeZone: 'Pacific/Honolulu' }).match(/^.*?\/(\d+).*?(\d+):.*(AM|PM)/)
  let date_time_data_honolulu = []
  
  date_time_container.innerHTML = ""

	document.getElementsByTagName("h2")[0].innerHTML = "Datestring: " + date.replace(/({|})/g, '')

  date_time_data.Date_now = Date.now()
  date_time_data.Date_parse_datestring = Date.parse(date)

	date_time_data["----------"] = "--------------"
  date_time_data.datestring_toDateString = time_object.toDateString()
  date_time_data.datestring_toString = time_object.toString()
  date_time_data.datestring_toTimeString = time_object.toTimeString()
  date_time_data.datestring_toLocaleString = time_object.toLocaleString()
  date_time_data.datestring_toLocaleDateString = time_object.toLocaleDateString()
  date_time_data.datestring_toLocaleTimeString = time_object.toLocaleTimeString()
  date_time_data.datestring_toJSON = time_object.toJSON()

  date_time_data["------------"] = "------------"
  date_time_data.datestring_getDay = time_object.getDay()
  date_time_data.datestring_getUTCDay = time_object.getUTCDay()

	date_time_data["-----------"] = "-------------"
  date_time_data.datestring_getMilliseconds = time_object.getMilliseconds()
  date_time_data.datestring_getSeconds = time_object.getSeconds()
  date_time_data.datestring_getMinutes = time_object.getMinutes()
  date_time_data.datestring_getHours = time_object.getHours()
  date_time_data.datestring_getDate = time_object.getDate()
  date_time_data.datestring_getMonth_plus_1 = time_object.getMonth() + 1
  date_time_data.datestring_getFullYear = time_object.getFullYear()

  date_time_data_local.push(Array("month", date_time_data.datestring_getMonth_plus_1))
  date_time_data_local.push(Array("day", date_time_data.datestring_getDate))
  date_time_data_local.push(Array("year", date_time_data.datestring_getFullYear))
  date_time_data_local.push(Array("hour", date_time_data.datestring_getHours))
  date_time_data_local.push(Array("minutes", date_time_data.datestring_getMinutes))
  date_time_data_local.push(Array("seconds", date_time_data.datestring_getSeconds))
  date_time_data_local.push(Array("milliseconds", date_time_data.datestring_getMilliseconds))

  date_time_data["----------"] = "--------------"
  date_time_data.datestring_valueOf = time_object.valueOf()
  date_time_data.datestring_getTime = time_object.getTime()
  date_time_data.datestring_toUTCString = time_object.toUTCString()
  date_time_data.datestring_toISOString = time_object.toISOString()
  date_time_data.datestring_getTimezoneOffset = time_object.getTimezoneOffset()
  date_time_data.datestring_getUTCDate = time_object.getUTCDate()
  date_time_data.datestring_getUTCMilliseconds = time_object.getUTCMilliseconds()
  date_time_data.datestring_getUTCSeconds = time_object.getUTCSeconds()
  date_time_data.datestring_getUTCMinutes = time_object.getUTCMinutes()
  date_time_data.datestring_getUTCHours = time_object.getUTCHours()
  date_time_data.datestring_getUTCMonth_plus_1 = time_object.getUTCMonth() + 1
  date_time_data.datestring_getUTCFullYear = time_object.getUTCFullYear()
  date_time_data.datestring_Date_UTC_datestring_data_toUTCString = new Date(Date.UTC(
  	date_time_data.datestring_getUTCFullYear,
  	date_time_data.datestring_getUTCMonth_plus_1 - 1,
    date_time_data.datestring_getUTCDate,
    date_time_data.datestring_getUTCHours,
    date_time_data.datestring_getUTCMinutes,
    date_time_data.datestring_getUTCSeconds
  )).toUTCString()

  date_time_data_utc.push(Array("month", date_time_data.datestring_getUTCMonth_plus_1))
  date_time_data_utc.push(Array("day", date_time_data.datestring_getUTCDate))
  date_time_data_utc.push(Array("year", date_time_data.datestring_getUTCFullYear))
  date_time_data_utc.push(Array("hour", date_time_data.datestring_getUTCHours))
  date_time_data_utc.push(Array("minutes", date_time_data.datestring_getUTCMinutes))
  date_time_data_utc.push(Array("seconds", date_time_data.datestring_getUTCSeconds))
  date_time_data_utc.push(Array("milliseconds", date_time_data.datestring_getUTCMilliseconds))


  date_time_data_mumbai.push(Array("month", date_time_data.datestring_getUTCMonth_plus_1))
  date_time_data_mumbai.push(Array("day", data_mumbai[1]))
  date_time_data_mumbai.push(Array("year", date_time_data.datestring_getUTCFullYear))
  date_time_data_mumbai.push(Array("hour", parseInt(data_mumbai[2]) + ((data_mumbai[3] === "PM") ? 12 : 0)))
  date_time_data_mumbai.push(Array("minutes", date_time_data.datestring_getUTCMinutes))
  date_time_data_mumbai.push(Array("seconds", date_time_data.datestring_getUTCSeconds))
  date_time_data_mumbai.push(Array("milliseconds", date_time_data.datestring_getUTCMilliseconds))

  date_time_data_honolulu.push(Array("month", date_time_data.datestring_getUTCMonth_plus_1))
  date_time_data_honolulu.push(Array("day", data_honolulu[1]))
  date_time_data_honolulu.push(Array("year", date_time_data.datestring_getUTCFullYear))
  date_time_data_honolulu.push(Array("hour", parseInt(data_honolulu[2]) + ((data_honolulu[3] === "PM") ? 12 : 0)))
  date_time_data_honolulu.push(Array("minutes", date_time_data.datestring_getUTCMinutes))
  date_time_data_honolulu.push(Array("seconds", date_time_data.datestring_getUTCSeconds))
  date_time_data_honolulu.push(Array("milliseconds", date_time_data.datestring_getUTCMilliseconds))


  for(let data in date_time_data)
      date_time_output.push(format_label(data) + ' : ' + date_time_data[data])

  for(let data of date_time_output){
    let li = document.createElement("li")
    li.innerHTML = data
    date_time_container.append(li)
  }

  time_data_formatted(date_time_format_containers[0], date_time_data_utc)
  time_data_formatted(date_time_format_containers[1], date_time_data_local)
  time_data_formatted(date_time_format_containers[2], date_time_data_mumbai)
  time_data_formatted(date_time_format_containers[3], date_time_data_honolulu)
}



document.getElementsByTagName("button")[0].addEventListener("click", function(event){
	date_time(document.getElementById("select").value)
})

date_time("{NOW}")













/*
let date1 = new Date('December 17, 1995 03:24:00')
// Sun Dec 17 1995 03:24:00 GMT...
let date2 = new Date('1995-12-17T03:24:00')
// Sun Dec 17 1995 03:24:00 GMT...
console.log(date1 === date2)
// expected output: false;
console.log(date1 - date2)
// expected output: 0
*/