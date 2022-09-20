import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Image from 'next/image';
import ETH from '../../images/assets/ETH.svg';
import DAI from '../../images/assets/DAI.svg';
import USDC from '../../images/assets/USDC.svg';
import USDT from '../../images/assets/USDT.svg';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export interface SupplyModalProps {
  symbol: string;
}

export const SupplyModal: React.FC<SupplyModalProps> = ({ symbol }: SupplyModalProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button type="button" fullWidth variant="contained" sx={{ height: '50px', width: '125px', borderRadius: '5px', ml: 1 }} onClick={handleOpen}>
        Supply
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Supply {symbol}
          </Typography>
          <Typography id="modal-modal-description" variant="body1" sx={{ mt: 7 }}>
            Enter an Amount
          </Typography>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Amount"
            variant="outlined"
            sx={{ mt: 2 }}
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
          <Button type="button" fullWidth variant="contained" sx={{ height: '50px', borderRadius: '5px', mt: 10 }}>
            Supply {symbol}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
