<description>Ethernet: Precision time protocol</description>
<groupName>Ethernet</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>PTPTSCR</name>
    <displayName>PTPTSCR</displayName>
    <description>Ethernet PTP time stamp control
    register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00002000</resetValue>
    <fields>
      <field>
        <name>TSE</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSFCU</name>
        <description>no description available</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSPTPPSV2E</name>
        <description>no description available</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSSPTPOEFE</name>
        <description>no description available</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSSIPV6FE</name>
        <description>no description available</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSSIPV4FE</name>
        <description>no description available</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSSEME</name>
        <description>no description available</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSSMRME</name>
        <description>no description available</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSCNT</name>
        <description>no description available</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>TSPFFMAE</name>
        <description>no description available</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSSTI</name>
        <description>no description available</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSSTU</name>
        <description>no description available</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSITE</name>
        <description>no description available</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TTSARU</name>
        <description>no description available</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSSARFE</name>
        <description>no description available</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSSSR</name>
        <description>no description available</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PTPSSIR</name>
    <displayName>PTPSSIR</displayName>
    <description>Ethernet PTP subsecond increment
    register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>STSSI</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PTPTSHR</name>
    <displayName>PTPTSHR</displayName>
    <description>Ethernet PTP time stamp high
    register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>STS</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PTPTSLR</name>
    <displayName>PTPTSLR</displayName>
    <description>Ethernet PTP time stamp low
    register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>STSS</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>31</bitWidth>
      </field>
      <field>
        <name>STPNS</name>
        <description>no description available</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PTPTSHUR</name>
    <displayName>PTPTSHUR</displayName>
    <description>Ethernet PTP time stamp high update
    register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TSUS</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PTPTSLUR</name>
    <displayName>PTPTSLUR</displayName>
    <description>Ethernet PTP time stamp low update
    register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TSUSS</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>31</bitWidth>
      </field>
      <field>
        <name>TSUPNS</name>
        <description>no description available</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PTPTSAR</name>
    <displayName>PTPTSAR</displayName>
    <description>Ethernet PTP time stamp addend
    register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TSA</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PTPTTHR</name>
    <displayName>PTPTTHR</displayName>
    <description>Ethernet PTP target time high
    register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TTSH</name>
        <description>0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PTPTTLR</name>
    <displayName>PTPTTLR</displayName>
    <description>Ethernet PTP target time low
    register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TTSL</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PTPTSSR</name>
    <displayName>PTPTSSR</displayName>
    <description>Ethernet PTP time stamp status
    register</description>
    <addressOffset>0x28</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TSSO</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSTTR</name>
        <description>no description available</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PTPPPSCR</name>
    <displayName>PTPPPSCR</displayName>
    <description>Ethernet PTP PPS control
    register</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TSSO</name>
        <description>TSSO</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSTTR</name>
        <description>TSTTR</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
</registers>
