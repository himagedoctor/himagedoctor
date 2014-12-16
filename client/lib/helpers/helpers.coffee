DateFormats =
  short: "YYYY-MM-DD"
  long: "dddd MM.DD.YYYY HH:mm"
	zh: "L"

UI.registerHelper "formatDate", (datetime, format) ->
  if moment and typeof datetime isnt "undefined"
    f = DateFormats[format]
    moment(datetime).format f
  else
    datetime
