#ifdef __USBOTG_HS
<description>USB on the go high speed</description>
#else
<description>USB on the go full speed</description>
#endif
<registers>
  <register>
    <name>PCGCCTL</name>
    <displayName>PCGCCTL</displayName>
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
#undef __USBOTG_HS
