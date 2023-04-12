import React from 'react';
import {styled, Typography} from "@mui/material";
import OrionContainer from "./OrionContainer";

const StyledSection = styled('section')(() => ({
   padding: "100px 0 80px"
}));

const PageDetailsContent = () => {
   return (
       <StyledSection>
          <OrionContainer>
             <Typography fontWeight={"500"} variant={"h2"} mb={3}>Everything About Freight Transportation</Typography>
             <Typography fontWeight={"500"} variant={"h3"} mb={10}>International Rail Freight: Everything You Need To
                Know About Rail Freight</Typography>

             <Typography fontWeight={"500"} variant={"h3"} mb={2}>Rail Transportation: An Overview</Typography>
             <Typography variant={"subtitle2"} mb={5}>The use of railroads and trains to convey cargo on land is known
                as rail freight transport. Rail transport is popular, especially in continents with extensive journey
                durations, such as China, Russia, the United States and Europe. Freight trains can transport a variety
                of cargo, including freight containers, automobiles, cattle, grains, coal, minerals and metals. Bulk
                goods, standardized shipping containers, or particularly constructed carriages for a specific sort of
                freight can all be transported by freight trains. Rail freight travels far more quickly than ocean
                freight. It costs more than sea freight, but less than air freight. Moving high-value industrial
                products like automobiles, electronics, and computer equipment, as well as promotional items, by train
                is ideal.</Typography>

             <Typography fontWeight={"500"} variant={"h3"} mb={2}>Benefits Of Choosing Rail Freight
                Transport</Typography>
             <Typography variant={"subtitle2"} mb={5}>While we consider energy use, rail freight might be one of the
                most efficient models of transportation. Six times lower than the road to be precise, especially for
                transporting goods over vast distances. It makes good economic and environmental sense: freight rails
                generate roughly 95% lower carbon emissions than airplanes and nearly 80% to 100% lower emissions than
                comparable road transport. Being environmentally friendly transportation follows the latest trends in
                modern society, thus rail freight logistics will always be supported. In addition, there are fewer
                accidents on railroads than on roadways. </Typography>

             <Typography fontWeight={"500"} variant={"h3"} mb={2}>Latest Freight Trends</Typography>
             <Typography variant={"subtitle2"} mb={5}>In order to demonstrate the significance and exposure of the rail
                freight let’s take a look at the numbers. There are 1.1 million kilometers of train tracks in the world.
                The United States takes the lion's share of this, accounting for 32 percent. Then there's Asia with 30%
                and Europe with 24%. Last year's statistics demonstrate that rail freight traffic is increasing
                globally. In Europe and Turkey alone, commodities traveled 3.1 billion ton- kilometers by rail in 2019.
                In Asia/Oceania and the Middle East this figure was about 3.5 billion ton-kilometers. The role of
                freight transportation has even increased during the pandemic. COVID-19 had a mixed influence on the
                rail freight business, with regions such as North and South America seeing a fall in rail freight
                traffic while Asia and Europe witnessed a spike, which is a considerable benefit for our company and
                region we operate. The regional share of rail freight is likely to grow significantly in the long run.
                Along with this, more investment, infrastructure expansion, and technology implementation to digitize
                rail freight are expected.</Typography>
          </OrionContainer>
       </StyledSection>
   );
};

export default PageDetailsContent;