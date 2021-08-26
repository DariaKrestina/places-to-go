import "./Footer.css"

function Footer() {
  return (
    <footer>
      <a href="#top" className="footer-txt">Back to top</a>
      <div className="footer-images">
        <a href="mailto:dykrestina@gmail.com">
            <img src="https://i.imgur.com/dku2zgp.png" alt="email icon" width="48px"/>
        </a>
        <a href="https://www.linkedin.com/in/daria-krestina/" target="_blank" rel="noreferrer">
            <img className="linkedin-image" src="https://i.imgur.com/Z7y5ob9.png" alt="Linkein logo" width="48px"/>
        </a>
        <a href="https://github.com/DariaKrestina" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/iavAlwB.png" alt="Github logo" width="48px"/>
          </a>
      </div>
    </footer>
  )
}

export default Footer