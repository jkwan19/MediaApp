import React from 'react';
import { Dimensions, ScrollView, StyleSheet} from 'react-native';
import CampaignItem from './CampaignItem.js'


function CampaignsList(props) {
  const campaigns = props.campaigns;
  const listCampaigns = campaigns.map((campaign) =>
    <CampaignItem
      key={campaign.id}
      campaign={campaign}
      />
  );

  return (
    <ScrollView>{listCampaigns}</ScrollView>
  )
}
export default CampaignsList;