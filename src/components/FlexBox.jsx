import {Box, styled} from "@mui/material";

const FlexBox = styled(Box)(() => ({display: "flex"}));

const FlexBetweenAlignCenter = styled(Box)(() => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
}));

const FlexBetweenAlignStart = styled(Box)(() => ({
   display: "flex",
   alignItems: "flex-start",
   justifyContent: "space-between",
}));

const FlexAllCenter = styled(Box)(() => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const FlexGap10 = styled(Box)(() => ({
   display: "flex",
   alignItems: "center",
   columnGap: "10px",
}));

export {FlexBox, FlexBetweenAlignCenter, FlexBetweenAlignStart, FlexAllCenter, FlexGap10};
