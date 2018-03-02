<description>Ethernet: MAC management counters</description>
<groupName>Ethernet</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>MMCCR</name>
    <displayName>MMCCR</displayName>
    <description>Ethernet MMC control register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CR</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CSR</name>
        <description>no description available</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ROR</name>
        <description>no description available</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MCF</name>
        <description>no description available</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MCP</name>
        <description>no description available</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MCFHP</name>
        <description>no description available</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MMCRIR</name>
    <displayName>MMCRIR</displayName>
    <description>Ethernet MMC receive interrupt
    register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RFCES</name>
        <description>no description available</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RFAES</name>
        <description>no description available</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RGUFS</name>
        <description>no description available</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MMCTIR</name>
    <displayName>MMCTIR</displayName>
    <description>Ethernet MMC transmit interrupt
    register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TGFSCS</name>
        <description>no description available</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TGFMSCS</name>
        <description>no description available</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TGFS</name>
        <description>no description available</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MMCRIMR</name>
    <displayName>MMCRIMR</displayName>
    <description>Ethernet MMC receive interrupt mask
    register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RFCEM</name>
        <description>no description available</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RFAEM</name>
        <description>no description available</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RGUFM</name>
        <description>no description available</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MMCTIMR</name>
    <displayName>MMCTIMR</displayName>
    <description>Ethernet MMC transmit interrupt mask
    register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TGFSCM</name>
        <description>no description available</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TGFMSCM</name>
        <description>no description available</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TGFM</name>
        <description>no description available</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MMCTGFSCCR</name>
    <displayName>MMCTGFSCCR</displayName>
    <description>Ethernet MMC transmitted good frames after a
    single collision counter</description>
    <addressOffset>0x4C</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TGFSCC</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MMCTGFMSCCR</name>
    <displayName>MMCTGFMSCCR</displayName>
    <description>Ethernet MMC transmitted good frames after
    more than a single collision</description>
    <addressOffset>0x50</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TGFMSCC</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MMCTGFCR</name>
    <displayName>MMCTGFCR</displayName>
    <description>Ethernet MMC transmitted good frames counter
    register</description>
    <addressOffset>0x68</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TGFC</name>
        <description>HTL</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MMCRFCECR</name>
    <displayName>MMCRFCECR</displayName>
    <description>Ethernet MMC received frames with CRC error
    counter register</description>
    <addressOffset>0x94</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RFCFC</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MMCRFAECR</name>
    <displayName>MMCRFAECR</displayName>
    <description>Ethernet MMC received frames with alignment
    error counter register</description>
    <addressOffset>0x98</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RFAEC</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MMCRGUFCR</name>
    <displayName>MMCRGUFCR</displayName>
    <description>MMC received good unicast frames counter
    register</description>
    <addressOffset>0xC4</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RGUFC</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
</registers>
