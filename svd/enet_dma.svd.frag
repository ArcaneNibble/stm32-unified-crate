<description>Ethernet: DMA controller operation</description>
<groupName>Ethernet</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>DMABMR</name>
    <displayName>DMABMR</displayName>
    <description>Ethernet DMA bus mode register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00002101</resetValue>
    <fields>
      <field>
        <name>SR</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DA</name>
        <description>no description available</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DSL</name>
        <description>no description available</description>
        <bitOffset>2</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>EDFE</name>
        <description>no description available</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PBL</name>
        <description>no description available</description>
        <bitOffset>8</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
      <field>
        <name>RTPR</name>
        <description>no description available</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>FB</name>
        <description>no description available</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RDP</name>
        <description>no description available</description>
        <bitOffset>17</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
      <field>
        <name>USP</name>
        <description>no description available</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FPM</name>
        <description>no description available</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AAB</name>
        <description>no description available</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MB</name>
        <description>no description available</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMATPDR</name>
    <displayName>DMATPDR</displayName>
    <description>Ethernet DMA transmit poll demand
    register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TPD</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMARPDR</name>
    <displayName>DMARPDR</displayName>
    <description>EHERNET DMA receive poll demand
    register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RPD</name>
        <description>RPD</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMARDLAR</name>
    <displayName>DMARDLAR</displayName>
    <description>Ethernet DMA receive descriptor list address
    register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SRL</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMATDLAR</name>
    <displayName>DMATDLAR</displayName>
    <description>Ethernet DMA transmit descriptor list
    address register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>STL</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMASR</name>
    <displayName>DMASR</displayName>
    <description>Ethernet DMA status register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TS</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TPSS</name>
        <description>no description available</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TBUS</name>
        <description>no description available</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TJTS</name>
        <description>no description available</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ROS</name>
        <description>no description available</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TUS</name>
        <description>no description available</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RS</name>
        <description>no description available</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RBUS</name>
        <description>no description available</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RPSS</name>
        <description>no description available</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PWTS</name>
        <description>no description available</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ETS</name>
        <description>no description available</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FBES</name>
        <description>no description available</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ERS</name>
        <description>no description available</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>AIS</name>
        <description>no description available</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>NIS</name>
        <description>no description available</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RPS</name>
        <description>no description available</description>
        <bitOffset>17</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TPS</name>
        <description>no description available</description>
        <bitOffset>20</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EBS</name>
        <description>no description available</description>
        <bitOffset>23</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>MMCS</name>
        <description>no description available</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PMTS</name>
        <description>no description available</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TSTS</name>
        <description>no description available</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>DMAOMR</name>
    <displayName>DMAOMR</displayName>
    <description>Ethernet DMA operation mode
    register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SR</name>
        <description>SR</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OSF</name>
        <description>OSF</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RTC</name>
        <description>RTC</description>
        <bitOffset>3</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>FUGF</name>
        <description>FUGF</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FEF</name>
        <description>FEF</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ST</name>
        <description>ST</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TTC</name>
        <description>TTC</description>
        <bitOffset>14</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>FTF</name>
        <description>FTF</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSF</name>
        <description>TSF</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DFRF</name>
        <description>DFRF</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RSF</name>
        <description>RSF</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTCEFD</name>
        <description>DTCEFD</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMAIER</name>
    <displayName>DMAIER</displayName>
    <description>Ethernet DMA interrupt enable
    register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TIE</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TPSIE</name>
        <description>no description available</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TBUIE</name>
        <description>no description available</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TJTIE</name>
        <description>no description available</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ROIE</name>
        <description>no description available</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TUIE</name>
        <description>no description available</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RIE</name>
        <description>no description available</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RBUIE</name>
        <description>no description available</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RPSIE</name>
        <description>no description available</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RWTIE</name>
        <description>no description available</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ETIE</name>
        <description>no description available</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBEIE</name>
        <description>no description available</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ERIE</name>
        <description>no description available</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AISE</name>
        <description>no description available</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NISE</name>
        <description>no description available</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMAMFBOCR</name>
    <displayName>DMAMFBOCR</displayName>
    <description>Ethernet DMA missed frame and buffer
    overflow counter register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MFC</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>OMFC</name>
        <description>no description available</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MFA</name>
        <description>no description available</description>
        <bitOffset>17</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>OFOC</name>
        <description>no description available</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMARSWTR</name>
    <displayName>DMARSWTR</displayName>
    <description>Ethernet DMA receive status watchdog timer
    register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RSWTC</name>
        <description>RSWTC</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMACHTDR</name>
    <displayName>DMACHTDR</displayName>
    <description>Ethernet DMA current host transmit
    descriptor register</description>
    <addressOffset>0x48</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>HTDAP</name>
        <description>HTDAP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMACHRDR</name>
    <displayName>DMACHRDR</displayName>
    <description>Ethernet DMA current host receive descriptor
    register</description>
    <addressOffset>0x4C</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>HRDAP</name>
        <description>HRDAP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMACHTBAR</name>
    <displayName>DMACHTBAR</displayName>
    <description>Ethernet DMA current host transmit buffer
    address register</description>
    <addressOffset>0x50</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>HTBAP</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DMACHRBAR</name>
    <displayName>DMACHRBAR</displayName>
    <description>Ethernet DMA current host receive buffer
    address register</description>
    <addressOffset>0x54</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>HRBAP</name>
        <description>no description available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
</registers>
