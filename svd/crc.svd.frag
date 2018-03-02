<description>Cryptographic processor</description>
<groupName>CRC</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>DR</name>
    <displayName>DR</displayName>
    <description>Data register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0xFFFFFFFF</resetValue>
    <fields>
      <field>
        <name>DR</name>
        <description>Data Register</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>IDR</name>
    <displayName>IDR</displayName>
    <description>Independent Data register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>IDR</name>
        <description>Independent Data register</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CR</name>
    <displayName>CR</displayName>
    <description>Control register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CR</name>
        <description>Control regidter</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
</registers>
