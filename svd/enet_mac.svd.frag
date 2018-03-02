<description>Ethernet: media access control
(MAC)</description>
<groupName>Ethernet</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>MACCR</name>
    <displayName>MACCR</displayName>
    <description>Ethernet MAC configuration
    register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0008000</resetValue>
    <fields>
      <field>
        <name>RE</name>
        <description>RE</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TE</name>
        <description>TE</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DC</name>
        <description>DC</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BL</name>
        <description>BL</description>
        <bitOffset>5</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>APCS</name>
        <description>APCS</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RD</name>
        <description>RD</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IPCO</name>
        <description>IPCO</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DM</name>
        <description>DM</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LM</name>
        <description>LM</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ROD</name>
        <description>ROD</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FES</name>
        <description>FES</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CSD</name>
        <description>CSD</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IFG</name>
        <description>IFG</description>
        <bitOffset>17</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>JD</name>
        <description>JD</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WD</name>
        <description>WD</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CSTF</name>
        <description>CSTF</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACFFR</name>
    <displayName>MACFFR</displayName>
    <description>Ethernet MAC frame filter
    register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PM</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HU</name>
        <description>no description available</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HM</name>
        <description>no description available</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DAIF</name>
        <description>no description available</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RAM</name>
        <description>no description available</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BFD</name>
        <description>no description available</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PCF</name>
        <description>no description available</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SAIF</name>
        <description>no description available</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SAF</name>
        <description>no description available</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HPF</name>
        <description>no description available</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RA</name>
        <description>no description available</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACHTHR</name>
    <displayName>MACHTHR</displayName>
    <description>Ethernet MAC hash table high
    register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>HTH</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACHTLR</name>
    <displayName>MACHTLR</displayName>
    <description>Ethernet MAC hash table low
    register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>HTL</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACMIIAR</name>
    <displayName>MACMIIAR</displayName>
    <description>Ethernet MAC MII address
    register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MB</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MW</name>
        <description>no description available</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CR</name>
        <description>no description available</description>
        <bitOffset>2</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MR</name>
        <description>no description available</description>
        <bitOffset>6</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>PA</name>
        <description>no description available</description>
        <bitOffset>11</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACMIIDR</name>
    <displayName>MACMIIDR</displayName>
    <description>Ethernet MAC MII data register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TD</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACFCR</name>
    <displayName>MACFCR</displayName>
    <description>Ethernet MAC flow control
    register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FCB</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TFCE</name>
        <description>no description available</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RFCE</name>
        <description>no description available</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>UPFD</name>
        <description>no description available</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLT</name>
        <description>no description available</description>
        <bitOffset>4</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ZQPD</name>
        <description>no description available</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PT</name>
        <description>no description available</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACVLANTR</name>
    <displayName>MACVLANTR</displayName>
    <description>Ethernet MAC VLAN tag register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>VLANTI</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>VLANTC</name>
        <description>no description available</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACPMTCSR</name>
    <displayName>MACPMTCSR</displayName>
    <description>Ethernet MAC PMT control and status
    register</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PD</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MPE</name>
        <description>no description available</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WFE</name>
        <description>no description available</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MPR</name>
        <description>no description available</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WFR</name>
        <description>no description available</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GU</name>
        <description>no description available</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WFFRPR</name>
        <description>no description available</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACDBGR</name>
    <displayName>MACDBGR</displayName>
    <description>Ethernet MAC debug register</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CR</name>
        <description>CR</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CSR</name>
        <description>CSR</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ROR</name>
        <description>ROR</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MCF</name>
        <description>MCF</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MCP</name>
        <description>MCP</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MCFHP</name>
        <description>MCFHP</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACSR</name>
    <displayName>MACSR</displayName>
    <description>Ethernet MAC interrupt status
    register</description>
    <addressOffset>0x38</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PMTS</name>
        <description>no description available</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>MMCS</name>
        <description>no description available</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>MMCRS</name>
        <description>no description available</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>MMCTS</name>
        <description>no description available</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TSTS</name>
        <description>no description available</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>MACIMR</name>
    <displayName>MACIMR</displayName>
    <description>Ethernet MAC interrupt mask
    register</description>
    <addressOffset>0x3C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PMTIM</name>
        <description>no description available</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSTIM</name>
        <description>no description available</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACA0HR</name>
    <displayName>MACA0HR</displayName>
    <description>Ethernet MAC address 0 high
    register</description>
    <addressOffset>0x40</addressOffset>
    <size>0x20</size>
    <resetValue>0x0010FFFF</resetValue>
    <fields>
      <field>
        <name>MACA0H</name>
        <description>MAC address0 high</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>MO</name>
        <description>Always 1</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>MACA0LR</name>
    <displayName>MACA0LR</displayName>
    <description>Ethernet MAC address 0 low
    register</description>
    <addressOffset>0x44</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0xFFFFFFFF</resetValue>
    <fields>
      <field>
        <name>MACA0L</name>
        <description>0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACA1HR</name>
    <displayName>MACA1HR</displayName>
    <description>Ethernet MAC address 1 high
    register</description>
    <addressOffset>0x48</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000FFFF</resetValue>
    <fields>
      <field>
        <name>MACA1H</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>MBC</name>
        <description>no description available</description>
        <bitOffset>24</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
      <field>
        <name>SA</name>
        <description>no description available</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AE</name>
        <description>no description available</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACA1LR</name>
    <displayName>MACA1LR</displayName>
    <description>Ethernet MAC address1 low
    register</description>
    <addressOffset>0x4C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0xFFFFFFFF</resetValue>
    <fields>
      <field>
        <name>MACA1LR</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACA2HR</name>
    <displayName>MACA2HR</displayName>
    <description>Ethernet MAC address 2 high
    register</description>
    <addressOffset>0x50</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000FFFF</resetValue>
    <fields>
      <field>
        <name>MAC2AH</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>MBC</name>
        <description>no description available</description>
        <bitOffset>24</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
      <field>
        <name>SA</name>
        <description>no description available</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AE</name>
        <description>no description available</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACA2LR</name>
    <displayName>MACA2LR</displayName>
    <description>Ethernet MAC address 2 low
    register</description>
    <addressOffset>0x54</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0xFFFFFFFF</resetValue>
    <fields>
      <field>
        <name>MACA2L</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>31</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACA3HR</name>
    <displayName>MACA3HR</displayName>
    <description>Ethernet MAC address 3 high
    register</description>
    <addressOffset>0x58</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000FFFF</resetValue>
    <fields>
      <field>
        <name>MACA3H</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>MBC</name>
        <description>no description available</description>
        <bitOffset>24</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
      <field>
        <name>SA</name>
        <description>no description available</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AE</name>
        <description>no description available</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MACA3LR</name>
    <displayName>MACA3LR</displayName>
    <description>Ethernet MAC address 3 low
    register</description>
    <addressOffset>0x5C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0xFFFFFFFF</resetValue>
    <fields>
      <field>
        <name>MBCA3L</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
</registers>
