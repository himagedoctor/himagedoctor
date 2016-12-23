import Head from 'next/head'
export default () => (
  <header>
    <Head>
      <title>Himage Doctor 仁美国际医疗（中国）</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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

.navbar.top-nav-collapse .nav.navbar-nav {
  background-color: rgba(0,0,0,0);
}


.navbar ul.nav li a {
	font-size: 12px;
	letter-spacing: 1px;
  color: #444;
  text-transform: uppercase;
  font-weight: 700;
}

.navbar.top-nav-collapse ul.nav li a {
 -webkit-transition: all .2s ease-in-out;
 -moz-transition: all .2s ease-in-out;
 transition: all .2s ease-in-out;
 color: #fff;
}

.navbar ul.nav ul.dropdown-menu {
 border-radius: 0;
}

.navbar ul.nav ul.dropdown-menu li {
	border-bottom: 1px solid #f5f5f5;

}

.navbar ul.nav ul.dropdown-menu li:last-child{
	border-bottom: none;
}

.navbar ul.nav ul.dropdown-menu li a {
	padding: 10px 20px;
}

.navbar ul.nav ul.dropdown-menu li a:hover {
	background: #fefefe;
}

.navbar.top-nav-collapse ul.nav ul.dropdown-menu li a {
	color: #666;
}

.navbar .nav li a {
  -webkit-transition: background .3s ease-in-out;
  -moz-transition: background .3s ease-in-out;
  transition: background .3s ease-in-out;
}

.navbar .nav li a:hover,
.navbar .nav li a:focus,
.navbar .nav li.active {
  outline: 0;
  background-color: rgba(255,255,255,.2);
}
.navbar .nav li a:hover,
.navbar .nav li a:focus,
.navbar .nav li.active {
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



      `}</style>
    </Head>
  </header>
)
