import Head from 'next/head'
export default () => (
  <header>
    <Head>
      <title>Himage Doctor 仁美国际医疗（中国）</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style>{`
        html {
  width: 100%;
  height: 100%;
}
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

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.container-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.row {
  margin-left: -15px;
  margin-right: -15px;
}

      `}</style>
    </Head>
  </header>
)
