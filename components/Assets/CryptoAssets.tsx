import { Box, Typography, Grid, Button } from '@mui/material';
import Image from 'next/image';
import ADA from '../../images/assets/ADA.svg';
import BTC from '../../images/assets/BTC.svg';
import ETH from '../../images/assets/ETH.svg';
import USDC from '../../images/assets/USDC.svg';
import USDT from '../../images/assets/USDT.svg';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

export interface CryptoAssetProps {
  name: string;
  symbol: string;
  available: string;
  apyV: string;
  apyS: string;
  isSm: boolean;
  isMd: boolean;
}

export const CryptoAsset: React.FC<CryptoAssetProps> = ({ name, symbol, available, apyV, apyS, isSm, isMd }: CryptoAssetProps) => {
  return (
    <Box sx={{ backgroundColor: '#FAFAFA', height: '75px', borderRadius: '5px', mt: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ pl: 3, pr: 3 }}>
        {isSm ? (
          <>
            <Grid container>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  {symbol === 'ADA' && <Image src={ADA} alt="ADA" />}
                  {symbol === 'BTC' && <Image src={BTC} alt="BTC" />}
                  {symbol === 'ETH' && <Image src={ETH} alt="ETH" />}
                  {symbol === 'USDC' && <Image src={USDC} alt="USDC" />}
                  {symbol === 'USDT' && <Image src={USDT} alt="USDT" />}
                  {!isSm && (
                    <Box sx={{ ml: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="body1" fontWeight={700}>
                        {name}
                      </Typography>
                      <Typography variant="body2">{symbol}</Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body2">{available}</Typography>
                    <Typography variant="body2">{apyV}</Typography>
                  </Box>
                  <CallMissedOutgoingIcon sx={{ ml: 1 }}></CallMissedOutgoingIcon>
                </Box>
              </Grid>
            </Grid>
          </>
        ) : isMd ? (
          <>
            <Grid container>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  {symbol === 'ADA' && <Image src={ADA} alt="ADA" />}
                  {symbol === 'BTC' && <Image src={BTC} alt="BTC" />}
                  {symbol === 'ETH' && <Image src={ETH} alt="ETH" />}
                  {symbol === 'USDC' && <Image src={USDC} alt="USDC" />}
                  {symbol === 'USDT' && <Image src={USDT} alt="USDT" />}
                  <Box sx={{ ml: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body1" fontWeight={700}>
                      {name}
                    </Typography>
                    <Typography variant="body2">{symbol}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body2">{available}</Typography>
                    <Typography variant="body2">{apyV}</Typography>
                  </Box>
                  <CallMissedOutgoingIcon></CallMissedOutgoingIcon>
                </Box>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid container>
              <Grid item xs={3}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  {symbol === 'ADA' && <Image src={ADA} alt="ADA" />}
                  {symbol === 'BTC' && <Image src={BTC} alt="BTC" />}
                  {symbol === 'ETH' && <Image src={ETH} alt="ETH" />}
                  {symbol === 'USDC' && <Image src={USDC} alt="USDC" />}
                  {symbol === 'USDT' && <Image src={USDT} alt="USDT" />}
                  <Box sx={{ ml: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body1" fontWeight={700}>
                      {name}
                    </Typography>
                    <Typography variant="body2">{symbol}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body2">{available}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Typography variant="body2">{apyV}</Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                  <Typography variant="body2">{apyS}</Typography>
                  <Button type="button" fullWidth variant="contained" sx={{ height: '50px', width: '125px', borderRadius: '5px', ml: 1 }}>
                    Borrow
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </Box>
  );
};
