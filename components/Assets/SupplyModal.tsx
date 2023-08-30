import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Icon, IconButton, inputLabelClasses, outlinedInputClasses, styled, TextField } from '@mui/material';
import Image from 'next/image';
import ETH from '../../images/assets/ETH.svg';
import DAI from '../../images/assets/DAI.svg';
import USDC from '../../images/assets/USDC.svg';
import USDT from '../../images/assets/USDT.svg';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  '@media (max-width:475px)': {
    width: '325px',
  },
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export interface SupplyModalProps {
  symbol: string;
  apyV: string;
  isSm: boolean;
  isMd: boolean;
}

export const SupplyModal: React.FC<SupplyModalProps> = ({ symbol, apyV, isSm, isMd }: SupplyModalProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {isSm ? (
        <>
          <IconButton onClick={handleOpen} sx={{ ml: 1 }}>
            <AddIcon></AddIcon>
          </IconButton>
        </>
      ) : isMd ? (
        <>
          <IconButton onClick={handleOpen}>
            <AddIcon></AddIcon>
          </IconButton>
        </>
      ) : (
        <>
          <Button type="button" fullWidth variant="contained" sx={{ height: '50px', width: '125px', borderRadius: '5px', ml: 1 }} onClick={handleOpen}>
            Supply
          </Button>
        </>
      )}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Supply {symbol}
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
          <Typography id="modal-modal-description" variant="body1" sx={{ mt: 5 }}>
            Enter an Amount
          </Typography>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Amount"
            variant="outlined"
            sx={{ mt: 1 }}
            InputProps={{
              endAdornment: (
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  {symbol === 'ETH' && <Image src={ETH} alt="ETH" />}
                  {symbol === 'DAI' && <Image src={DAI} alt="DAI" />}
                  {symbol === 'USDC' && <Image src={USDC} alt="USDC" />}
                  {symbol === 'USDT' && <Image src={USDT} alt="USDT" />}
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {symbol}
                  </Typography>
                </Box>
              ),
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1" sx={{ mt: 5 }}>
              Transaction Overview
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: 1.5, mt: 1, border: '1px solid #c2c3c5', borderRadius: '5px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography variant="body2">Supply APY</Typography>
                <Typography variant="body2">{apyV}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="body2">Collateralization</Typography>
                <Typography variant="body2">Enabled</Typography>
              </Box>
            </Box>
          </Box>
          <Button type="button" fullWidth variant="contained" sx={{ height: '50px', borderRadius: '5px', mt: 8 }}>
            Supply {symbol}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
