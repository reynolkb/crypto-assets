import { Box, Typography, Paper, Grid } from '@mui/material';
import { CryptoAsset } from './CryptoAssets';

const assetHeaders = ['Asset', 'Available', 'APY, variable', 'APY, stable'];
const assetMobileHeaders = ['Asset', 'Available'];

const assets = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    available: '5',
    apyV: '< 0.01%',
    apyS: '5.46%',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    available: '100',
    apyV: '< 0.01%',
    apyS: '5.15%',
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    available: '1,000',
    apyV: '< 0.01%',
    apyS: '5.32%',
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    available: '10,000',
    apyV: '< 0.01%',
    apyS: '4.87%',
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    available: '10,000',
    apyV: '< 0.01%',
    apyS: '4.91%',
  },
];

export interface AssetProps {
  isSm: boolean;
  isMd: boolean;
}

export const Assets: React.FC<AssetProps> = ({ isSm, isMd }) => {
  return (
    <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', mt: 5, borderRadius: '5px' }}>
      {isSm ? (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pt: 3, pb: 2, pl: 4, pr: 4, alignItems: 'center' }}>
            <Typography variant="h5">Assets to borrow</Typography>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pt: 3, pb: 2, pl: 4, pr: 4, alignItems: 'center' }}>
            <Typography variant="h5">Assets to borrow</Typography>
          </Box>
        </>
      )}
      <Box sx={{ flexGrow: 1, pt: 2, pb: 1, pl: 3, pr: 3, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ pl: 3, pr: 3 }}>
          <Grid container>
            {isMd
              ? Array.from(assetMobileHeaders).map((assetHeader, index) => (
                  <Grid item xs={6} key={index}>
                    <Typography variant="body3">{assetHeader}</Typography>
                  </Grid>
                ))
              : Array.from(assetHeaders).map((assetHeader, index) => (
                  <Grid item xs={3} key={index}>
                    <Typography variant="body3">{assetHeader}</Typography>
                  </Grid>
                ))}
          </Grid>
        </Box>
        {Array.from(assets).map((asset, index) => (
          <CryptoAsset key={index} name={asset.name} symbol={asset.symbol} available={asset.available} apyV={asset.apyV} apyS={asset.apyS} isSm={isSm} isMd={isMd} />
        ))}
        <Box sx={{ mt: 2 }}></Box>
      </Box>
    </Paper>
  );
};
