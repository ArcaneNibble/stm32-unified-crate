<description>USB on the go high speed</description>
<groupName>USB_OTG_HS</groupName>
<registers>
  <register>
    <name>OTG_HS_PCGCR</name>
    <displayName>OTG_HS_PCGCR</displayName>
    <description>Power and clock gating control
    register</description>
    <addressOffset>0x0</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>STPPCLK</name>
        <description>Stop PHY clock</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GATEHCLK</name>
        <description>Gate HCLK</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PHYSUSP</name>
        <description>PHY suspended</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
</registers>
