module.exports=
[
 {
	"browserName": "Chrome",
	"browserVersion": "127.0",
	"LT:Options": {
    'platform': 'Windows 10',
      'build': 'Playwright Build',
      'name': 'Playwright Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
		"video": true,
		"platform": "Windows 10",
		"tunnel": true,
		"console": true
	}
},
{
	"browserName": "Chrome",
	"browserVersion": "127.0",
	"LT:Options": {
        'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
		"video": true,
		"platform": "macOS Catalina",
		"tunnel": true,
		"console": true
	}
}
]