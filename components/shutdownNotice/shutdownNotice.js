import { Dialog, Typography, Button } from '@material-ui/core';
import classes from "./shutdownNotice.module.css";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

export default function shutdownNotice({ close }) {

  return (
    <Dialog fullScreen open={ true } onClose={close} >
      <div className={ classes.dialogContainer }>
        <div className={classes.warningContainer}>
          <PowerSettingsNewIcon className={ classes.warningIcon } />
          <Typography className={classes.para2} align='center'>
            Site Alive agein.
          </Typography>
          <Typography className={classes.para2} align='center'>
            Few changes happening in the website you might encounter some few bugs in the next few days.
          </Typography>
          <div className={ classes.buttonsContainer }>
            <Button
              fullWidth
              variant='contained'
              size='large'
              className={classes.primaryButton }
              onClick={close}>
              <Typography className={ classes.buttonTextPrimary }>Okay</Typography>
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
