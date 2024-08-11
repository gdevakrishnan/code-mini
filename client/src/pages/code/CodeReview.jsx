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
import { getCodeReview, toCodeComment, toCodeDebug, toCodeExecute } from '../../services/serviceWorker';

function CodeReview() {
  const languageDB = [
    { language: "java", extension: "java", code: "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}" },
    { language: "c_cpp", extension: "cpp", code: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}" },
    { language: "javascript", extension: "js", code: "console.log('Hello, World!');" },
    { language: "python", extension: "py", code: "print('Hello, World!')" },
    { language: "typescript", extension: "ts", code: "console.log('Hello, World!');" },
    { language: "dart", extension: "dart", code: "void main() {\n  print('Hello, World!');\n}" },
    { language: "php", extension: "php", code: "<?php\n  echo 'Hello, World!';\n?>" },
    { language: "rust", extension: "rs", code: "fn main() {\n    println!(\"Hello, World!\");\n}" },
    { language: "ruby", extension: "rb", code: "puts 'Hello, World!'" },
    { language: "golang", extension: "go", code: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n}" }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [code, setCode] = useState('');
  const [review, setReview] = useState(null);
  const [output, setOutput] = useState(null);

  function onChange(newValue) {
    setCode(newValue);
  }

  // To handle the language switch
  const handleChangeLanguage = (e) => {
    e.preventDefault();
    const selected = languageDB.filter(aLanguage => aLanguage.language == e.target.value)
    selected.length && setSelectedLanguage(selected[0].language);
    selected.length && setCode(selected[0].code);
    selected.length == 0 && setSelectedLanguage(null);
    selected.length == 0 && setCode(null);
  }

  // To get review of the code
  const handleReview = async () => {
    getCodeReview(code)
      .then((response) => {
        setReview(response.data)
      })
      .catch((e) => console.log(e.message));
  }

  // To debug and make the code more efficient
  const handleDebug = async () => {
    toCodeDebug(code)
      .then((response) => {
        if (response.data.startsWith('```') && response.data.endsWith('```')) {
          setCode(response.data.slice(3, -3).trim());
        }
      })
      .catch((e) => console.log(e.message));
  }

  // To comment the code
  const handleComment = async () => {
    toCodeComment(code)
      .then((response) => {
        if (response.data.startsWith('```') && response.data.endsWith('```')) {
          setCode(response.data.slice(3, -3).trim());
        }
      })
      .catch((e) => console.log(e.message));
  }

  // To execute the code
  const handleExecute = async () => {
    toCodeExecute(code)
      .then((response) => {
        setOutput(response.data)
      })
      .catch((e) => console.log(e.message));
  }

  // To handle download the code with extension
  const handleDownload = () => {
    const language = languageDB.find(lang => lang.language === selectedLanguage);
    if (!language) return;

    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${language.extension}`;
    a.click();
    URL.revokeObjectURL(url);
  };


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
          value={(code && selectedLanguage) ? code : "Type Here\nNote:\n Enter the code here to get review and execute\n Enter the prompt here and get the code using GenAi"}
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
              <button className='btn' onClick={() => handleExecute()}>Execute</button>
              <button className='btn' onClick={() => handleDebug()}>GenAi</button>
              <button className='btn' onClick={() => handleReview()}>Review</button>
              <button className='btn' onClick={() => handleComment()}>Comment</button>
              <button className='btn' onClick={() => handleDownload()}>Download</button>
            </div>
          ) : null
        }

        {
          (selectedLanguage && code && output) ? (
            <div className="output">
              <h1 className="title">Output</h1>
              <div dangerouslySetInnerHTML={{ __html: output }} />
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
