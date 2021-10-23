import React from 'react';
import styled from "styled-components";

import {ContentBoxWithHeader} from "../../components/layout";
import SectionHeader from "./SectionHeader";
import theme from "../../components/theme";
import Footer from "../../components/Footer";
import {useHistory} from "react-router-dom";
import {Client} from "@snapshot-labs/snapshot.js";
import {getEthersProvider} from "../../web3modal";

const SummaryArticleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SummaryArticleLeftContianer = styled.div`

`

const SummaryArticleRightContianer = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 141%;
    
    text-align: right;
    letter-spacing: -0.01em;
    
    color: #B8B8B8;
`

const SummaryArticleTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    
    color: #989898;
    margin-bottom: 5px;
`

const SummaryArticleSummary = styled.div`
    max-width: 240px;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 130%;
    
    letter-spacing: -0.01em;
    
    color: #424242;
`

const Divider = styled.div`
    opacity: 0.05;
    border-bottom: 1px solid #000000;
    height: 0px;
    width: 100%;
`

const ForAgainst = styled.span`
    color: ${p => p.for ? theme.colors.green : theme.colors.red};
`

const ContentContainer = styled.div`
    display: grid;
    gap: 15px;
`

const SummaryArticle = ({title, vote}, idx, arr) => {
    return (
        <>
            <SummaryArticleContainer>
                <SummaryArticleLeftContianer>
                    <SummaryArticleTitle>
                        Article {idx + 1}
                    </SummaryArticleTitle>
                    <SummaryArticleSummary>
                        {title}
                    </SummaryArticleSummary>
                </SummaryArticleLeftContianer>
                <SummaryArticleRightContianer>
                    Voted <ForAgainst for={vote}>{vote ? 'for' : 'against'}</ForAgainst>
                </SummaryArticleRightContianer>
            </SummaryArticleContainer>
            {!(idx === arr.length-1) && <Divider/>}
        </>
    )
}

const handleVote = async () => {
    const snapshotClient = new Client()
    const ethersProvider = getEthersProvider()
    snapshotClient.vote(
        ethersProvider,
        '0xBe8563B89d31AD287c73da42848Bd7646172E0ba',
        'bananana.eth',
        {proposal: 'QmerF9zBj9QNk3evSTigCdmfQ1SdS2MN4yfCkyHZCd8tcy', choice: [1]}
    )

    // const scores = await utils.getScores(
    //     'bananana.eth',
    //     ['api'],
    //     'Ethereum mainnet',
    //     ethersProvider,
    //     ['0xBe8563B89d31AD287c73da42848Bd7646172E0ba'],
    // );

    // console.log('scores: ', scores)

    //const result = await fetch('https://us-central1-ens-manager.cloudfunctions.net/getvotes?addresses=0x0904dac3347ea47d208f3fd67402d039a3b99859')
    //console.log('result: ', result)
}

const Summary = ({currentStep, setCurrentStep, constitution}) => {
    const history = useHistory();

    return (
        <>
            <ContentBoxWithHeader
                HeaderComponent={<SectionHeader {...{currentStep, setCurrentStep}}/>}
            >
                <ContentContainer>
                    {constitution.map(SummaryArticle)}
                </ContentContainer>
            </ContentBoxWithHeader>
            <Footer
                rightButtonText="Sign"
                rightButtonCallback={() => {
                    handleVote()
                    history.push('/constitution/sign')}
                }
                leftButtonText="Back"
                leftButtonCallback={() => {
                    setCurrentStep(currentStep-1)
                }}
            />
        </>
    )
}

export default Summary
