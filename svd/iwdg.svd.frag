<description>Independent watchdog</description>
<groupName>IWDG</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>KR</name>
    <displayName>KR</displayName>
    <description>Key register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>KEY</name>
        <description>Key value (write only, read
        0000h)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PR</name>
    <displayName>PR</displayName>
    <description>Prescaler register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PR</name>
        <description>Prescaler divider</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RLR</name>
    <displayName>RLR</displayName>
    <description>Reload register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000FFF</resetValue>
    <fields>
      <field>
        <name>RL</name>
        <description>Watchdog counter reload
        value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SR</name>
    <displayName>SR</displayName>
    <description>Status register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RVU</name>
        <description>Watchdog counter reload value
        update</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PVU</name>
        <description>Watchdog prescaler value
        update</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
</registers>
