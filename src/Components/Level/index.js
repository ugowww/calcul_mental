import React, { PureComponent } from 'react'
import {LevelStyle} from './Level.style'
import { isMobileOnly } from 'react-device-detect';

export default class index extends PureComponent {

  render() {
    const {gradeWidth} = isMobileOnly ? {gradeWidth:40} :{gradeWidth:55}
    return (
        <LevelStyle gradeWidth={gradeWidth} >
      <React.Fragment>
        <span className="grade-box-tab purple1-bg">{Number(this.props.int)+1}</span>
      </React.Fragment>
      </LevelStyle>
    )
  }
}


