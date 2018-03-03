<description>Random number generator</description>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>CR</name>
    <displayName>CR</displayName>
    <description>control register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>IE</name>
        <description>Interrupt enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RNGEN</name>
        <description>Random number generator
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SR</name>
    <displayName>SR</displayName>
    <description>status register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SEIS</name>
        <description>Seed error interrupt
        status</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CEIS</name>
        <description>Clock error interrupt
        status</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SECS</name>
        <description>Seed error current status</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>CECS</name>
        <description>Clock error current status</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DRDY</name>
        <description>Data ready</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>DR</name>
    <displayName>DR</displayName>
    <description>data register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RNDATA</name>
        <description>Random data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
</registers>
