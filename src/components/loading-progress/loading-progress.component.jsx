import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingProgress = ()  => {

  return (
    <div>
      {
        <Stack sx={{ position: "fixed", zIndex: "1", top: "50%", left: "50%", transform: "translate(-50%)" }} spacing={2} >
          <CircularProgress color="secondary" style={{ width: "120px", height: "auto" }}/>
        </Stack>
      }
    </div>
  );
}

export default LoadingProgress;