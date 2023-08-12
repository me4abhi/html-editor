import "./CodeExample.scss";
import PropTypes from "prop-types";
import htmlIcon from "../assets/html5.svg";
import cssIcon from "../assets/css3.svg";
import jsIcon from "../assets/js.svg";
import { useEffect } from "react";

const CodeExample = ({ html, css, js }) => {
  useEffect(() => {
    const target =
      document.getElementById("code-output").contentWindow.document;
    target.open();
    target.writeln(
      html + "<style>" + css + "</style>" + "<script>" + js + "</script>"
    );
    target.close();
  }, [html, css, js]);

  return (
    <div className="container-codeExample">
      <div className="left">
        <label htmlFor="html-code">
          <span>
            <img src={htmlIcon} />
            HTML
          </span>
        </label>
        <textarea id="html-code" value={html} readOnly />

        <label htmlFor="css-code">
          <span>
            <img src={cssIcon} />
            CSS
          </span>
        </label>
        <textarea id="css-code" value={css} readOnly />

        <label htmlFor="js-code">
          <span>
            <img src={jsIcon} className="inline-icon" />
            JavaScript
          </span>
        </label>
        <textarea id="js-code" value={js} readOnly />
      </div>

      <div className="right">
        <iframe id="code-output"></iframe>
      </div>
    </div>
  );
};

CodeExample.propTypes = {
  html: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
  js: PropTypes.string,
};

export default CodeExample;
