import {Line} from 'rc-progress'

const ProgressBar = () => {
    const percent = 48; // Set the percentage here
  
    return (
      <div>
        <Line percent={percent} strokeWidth={4} strokeColor="#10181F" />
      </div>
    );
  };
  
  export default ProgressBar;