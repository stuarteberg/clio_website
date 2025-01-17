import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Tooltip from '@material-ui/core/Tooltip';

function AnnotationToolControl(props) {
  const { defaultTool, tools, onToolChanged } = props;
  const [tool, setTool] = React.useState(defaultTool);

  const handleChange = (event) => {
    setTool(event.target.value);
    onToolChanged(event.target.value);
  };

  const buttons = tools.map((atool) => (
    <Tooltip key={atool.name} title={atool.tooltip}>
      <FormControlLabel value={atool.name} control={<Radio color="primary" />} label={atool.label} />
    </Tooltip>
  ));

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Annotate (by Ctrl+Click in the viewer)</FormLabel>
      <FormGroup row>
        <RadioGroup row value={tool} onChange={handleChange}>
          {buttons}
        </RadioGroup>
      </FormGroup>
    </FormControl>
  );
}

AnnotationToolControl.propTypes = {
  defaultTool: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToolChanged: PropTypes.func.isRequired,
};

export default AnnotationToolControl;
