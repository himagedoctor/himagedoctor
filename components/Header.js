import Head from 'next/head'

export default () => (
  <header>
    <Head>
      <title>Himage Doctor 仁美国际医疗（中国）</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <style>{`
        body {
          width: 100%;
          height: 100%;
          font-family: 'Lato',sans-serif;
          font-weight: 300;
          color: #666;
          background-color: #fff;
          position: relative;
        }
        p {
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 1.6em;
  text-align: left;
}
a {
  color: #28c3ab;
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

a:hover,
a:focus {
  text-decoration: none;
  color: #176e61;
}

.text-right {
  text-align: right;
}

.navbar {
  margin-bottom: 0;
  border-bottom: 1px solid rgba(255,255,255,.3);

}

.navbar-brand {
  font-weight: 700;
}

.navbar-brand {
  height: 40px;
  padding: 5px 15px;
  font-size: 18px;
  line-height: 1em;
}

.navbar-brand h1{
	color: #fff;
  font-size: 20px;
  line-height: 40px;
}

.navbar-brand:focus {
  outline: 0;
}

.nav.navbar-nav {
  background-color: rgba(255,255,255,.4);
}

.navbar-default {
  background-color: rgb(255,255,255);
}

.navbar-default.top-nav-collapse .nav.navbar-nav {
  background-color: rgba(0,0,0,0);
}


.navbar-default ul.nav li a {
	font-size: 12px;
	letter-spacing: 1px;
  color: #444;
  text-transform: uppercase;
  font-weight: 700;
}

.navbar-default.top-nav-collapse ul.nav li a {
 -webkit-transition: all .2s ease-in-out;
 -moz-transition: all .2s ease-in-out;
 transition: all .2s ease-in-out;
 color: #fff;
}

.navbar-default ul.nav ul.dropdown-menu {
 border-radius: 0;
}

.navbar-default ul.nav ul.dropdown-menu li {
	border-bottom: 1px solid #f5f5f5;

}

.navbar-default ul.nav ul.dropdown-menu li:last-child{
	border-bottom: none;
}

.navbar-default ul.nav ul.dropdown-menu li a {
	padding: 10px 20px;
}

.navbar-default ul.nav ul.dropdown-menu li a:hover {
	background: #fefefe;
}

.navbar-default.top-nav-collapse ul.nav ul.dropdown-menu li a {
	color: #666;
}

.navbar-default .nav li a {
  -webkit-transition: background .3s ease-in-out;
  -moz-transition: background .3s ease-in-out;
  transition: background .3s ease-in-out;
}

.navbar-default .nav li a:hover,
.navbar-default .nav li a:focus,
.navbar-default .nav li.active {
  outline: 0;
  background-color: rgba(255,255,255,.2);
}
.navbar-default .nav li a:hover,
.navbar-default .nav li a:focus,
.navbar-default .nav li.active {
  outline: 0;
  background-color: rgba(255,255,255,.2);
}

.navbar-toggle {
  padding: 4px 6px;
  font-size: 14px;
  color: #fff;
}

.navbar-toggle:focus,
.navbar-toggle:active {
  outline: 0;
}

hr {
  margin-top: 10px;
}

.marginbot-0{margin-bottom:0 !important;}
.marginbot-10{margin-bottom:10px !important;}
.marginbot-20{margin-bottom:20px !important;}
.marginbot-30{margin-bottom:30px !important;}
.marginbot-40{margin-bottom:40px !important;}
.marginbot-50{margin-bottom:50px !important;}

.home-section {
  padding-top: 110px;
  padding-bottom: 110px;
  display:block;
  position:relative;
  z-index:120;
}

.section-heading h2 {
	font-size: 40px;
}
.section-heading i {
	margin-bottom: 20px;
}

.bg-white {
	background: #fff;
}

.bg-gray {
	background: #f8f8f8;
}

.bg-dark {
	background: #575757;
}

.text-light {
	color: #fff;
}

.service {
  padding-top: 30px;
}

.boxed-grey {
	background: #f9f9f9;
	padding: 20px;
  border-bottom: 5px solid white;
}


      `}</style>
    </Head>
  </header>
)
