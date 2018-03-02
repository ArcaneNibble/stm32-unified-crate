<description>Window watchdog</description>
<groupName>WWDG</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>CR</name>
    <displayName>CR</displayName>
    <description>Control register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x7F</resetValue>
    <fields>
      <field>
        <name>WDGA</name>
        <description>Activation bit</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>T</name>
        <description>7-bit counter (MSB to LSB)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CFR</name>
    <displayName>CFR</displayName>
    <description>Configuration register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x7F</resetValue>
    <fields>
      <field>
        <name>EWI</name>
        <description>Early wakeup interrupt</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WDGTB1</name>
        <description>Timer base</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WDGTB0</name>
        <description>Timer base</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>W</name>
        <description>7-bit window value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SR</name>
    <displayName>SR</displayName>
    <description>Status register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00</resetValue>
    <fields>
      <field>
        <name>EWIF</name>
        <description>Early wakeup interrupt
        flag</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
</registers>
