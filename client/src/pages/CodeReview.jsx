import React, { Fragment } from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeReview() {
  function onChange(newValue) {
    console.log("change", newValue);
  }

  return (
    <Fragment>
      <div className="page code_review_page">
        <AceEditor
          mode="python"
          theme="tomorrow_night"
          value='print("Hello World")'
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          className='code_editor'
          width='50%'
          fontSize={"1.1rem"}
          wrapEnabled
        />
      </div>
    </Fragment>
  )
}

export default CodeReview