import React, { Fragment, useState } from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-golang";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/ext-language_tools";
import { getCodeReview } from '../../services/serviceWorker';

function CodeReview() {
  const languageDB = [
    {
      "language": "java",
      "code": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
    },
    {
      "language": "c_cpp",
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}"
    },
    {
      "language": "javascript",
      "code": "console.log('Hello, World!');"
    },
    {
      "language": "python",
      "code": "print('Hello, World!')"
    },
    {
      "language": "typescript",
      "code": "console.log('Hello, World!');"
    },
    {
      "language": "dart",
      "code": "void main() {\n  print('Hello, World!');\n}"
    },
    {
      "language": "php",
      "code": "<?php\n  echo 'Hello, World!';\n?>"
    },
    {
      "language": "rust",
      "code": "fn main() {\n    println!(\"Hello, World!\");\n}"
    },
    {
      "language": "ruby",
      "code": "puts 'Hello, World!'"
    },
    {
      "language": "golang",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n}"
    }
  ];


  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [code, setCode] = useState('');
  const [review, setReview] = useState(null);

  function onChange(newValue) {
    setCode(newValue);
  }

  const handleChangeLanguage = (e) => {
    e.preventDefault();
    const selected = languageDB.filter(aLanguage => aLanguage.language == e.target.value)
    selected.length && setSelectedLanguage(selected[0].language);
    selected.length && setCode(selected[0].code);
    selected.length == 0 && setSelectedLanguage(null);
    selected.length == 0 && setCode(null);
  }

  const handleReview = async () => {
    getCodeReview(code)
      .then((response) => setReview(response.data))
      .catch((e) => console.log(e.message));
  }

  return (
    <Fragment>
      <div className="page code_review_page">
        <form className='form language_form'>
          <select value={selectedLanguage} onChange={(e) => handleChangeLanguage(e)} className='select'>
            <option value="">Select Language</option>
            <option value="java">Java</option>
            <option value="c_cpp">C/C++</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="typescript">TypeScript</option>
            <option value="dart">dart</option>
            <option value="php">php</option>
            <option value="rust">rust</option>
            <option value="ruby">ruby</option>
            <option value="golang">golang</option>
          </select>
        </form>

        {
          (!selectedLanguage) ? <h3 className='select_language_msg'>* Select the language to type the code</h3> : null
        }

        <AceEditor
          mode={selectedLanguage}
          theme="tomorrow_night"
          value={(code && selectedLanguage) ? code : "Type Here"}
          placeholder='Type Here'
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          className='code_editor'
          width='90%'
          fontSize={"1.1rem"}
          wrapEnabled
          enableBasicAutocompletion
          enableLiveAutocompletion
          readOnly={(selectedLanguage) ? false : true}
        />

        {
          (selectedLanguage && code) ? (
            <div className="buttons">
              <button onClick={() => handleReview()}>Review</button>
              <button>Debug</button>
              <button>Run</button>
            </div>
          ) : null
        }

        {
          (selectedLanguage && code && review) ? (
            <div className="review">
              <div dangerouslySetInnerHTML={{ __html: review }} />
            </div>
          ) : null
        }
      </div>
    </Fragment>
  );
}

export default CodeReview;
