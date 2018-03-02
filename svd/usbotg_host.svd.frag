<description>USB on the go high speed</description>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>OTG_HS_HCFG</name>
    <displayName>OTG_HS_HCFG</displayName>
    <description>OTG_HS host configuration
    register</description>
    <addressOffset>0x0</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>FSLSPCS</name>
        <description>FS/LS PHY clock select</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FSLSS</name>
        <description>FS- and LS-only support</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HFIR</name>
    <displayName>OTG_HS_HFIR</displayName>
    <description>OTG_HS Host frame interval
    register</description>
    <addressOffset>0x4</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0000EA60</resetValue>
    <fields>
      <field>
        <name>FRIVL</name>
        <description>Frame interval</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HFNUM</name>
    <displayName>OTG_HS_HFNUM</displayName>
    <description>OTG_HS host frame number/frame time
    remaining register</description>
    <addressOffset>0x8</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x00003FFF</resetValue>
    <fields>
      <field>
        <name>FRNUM</name>
        <description>Frame number</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>FTREM</name>
        <description>Frame time remaining</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HPTXSTS</name>
    <displayName>OTG_HS_HPTXSTS</displayName>
    <description>OTG_HS_Host periodic transmit FIFO/queue
    status register</description>
    <addressOffset>0x10</addressOffset>
    <size>32</size>
    <resetValue>0x00080100</resetValue>
    <fields>
      <field>
        <name>PTXFSAVL</name>
        <description>Periodic transmit data FIFO space
        available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PTXQSAV</name>
        <description>Periodic transmit request queue space
        available</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PTXQTOP</name>
        <description>Top of the periodic transmit request
        queue</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HAINT</name>
    <displayName>OTG_HS_HAINT</displayName>
    <description>OTG_HS Host all channels interrupt
    register</description>
    <addressOffset>0x14</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>HAINT</name>
        <description>Channel interrupts</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HAINTMSK</name>
    <displayName>OTG_HS_HAINTMSK</displayName>
    <description>OTG_HS host all channels interrupt mask
    register</description>
    <addressOffset>0x18</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>HAINTM</name>
        <description>Channel interrupt mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HPRT</name>
    <displayName>OTG_HS_HPRT</displayName>
    <description>OTG_HS host port control and status
    register</description>
    <addressOffset>0x40</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PCSTS</name>
        <description>Port connect status</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PCDET</name>
        <description>Port connect detected</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PENA</name>
        <description>Port enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PENCHNG</name>
        <description>Port enable/disable change</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>POCA</name>
        <description>Port overcurrent active</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>POCCHNG</name>
        <description>Port overcurrent change</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PRES</name>
        <description>Port resume</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PSUSP</name>
        <description>Port suspend</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PRST</name>
        <description>Port reset</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PLSTS</name>
        <description>Port line status</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PPWR</name>
        <description>Port power</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PTCTL</name>
        <description>Port test control</description>
        <bitOffset>13</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PSPD</name>
        <description>Port speed</description>
        <bitOffset>17</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR0</name>
    <displayName>OTG_HS_HCCHAR0</displayName>
    <description>OTG_HS host channel-0 characteristics
    register</description>
    <addressOffset>0x100</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR1</name>
    <displayName>OTG_HS_HCCHAR1</displayName>
    <description>OTG_HS host channel-1 characteristics
    register</description>
    <addressOffset>0x120</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR2</name>
    <displayName>OTG_HS_HCCHAR2</displayName>
    <description>OTG_HS host channel-2 characteristics
    register</description>
    <addressOffset>0x140</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR3</name>
    <displayName>OTG_HS_HCCHAR3</displayName>
    <description>OTG_HS host channel-3 characteristics
    register</description>
    <addressOffset>0x160</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR4</name>
    <displayName>OTG_HS_HCCHAR4</displayName>
    <description>OTG_HS host channel-4 characteristics
    register</description>
    <addressOffset>0x180</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR5</name>
    <displayName>OTG_HS_HCCHAR5</displayName>
    <description>OTG_HS host channel-5 characteristics
    register</description>
    <addressOffset>0x1A0</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR6</name>
    <displayName>OTG_HS_HCCHAR6</displayName>
    <description>OTG_HS host channel-6 characteristics
    register</description>
    <addressOffset>0x1C0</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR7</name>
    <displayName>OTG_HS_HCCHAR7</displayName>
    <description>OTG_HS host channel-7 characteristics
    register</description>
    <addressOffset>0x1E0</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR8</name>
    <displayName>OTG_HS_HCCHAR8</displayName>
    <description>OTG_HS host channel-8 characteristics
    register</description>
    <addressOffset>0x200</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR9</name>
    <displayName>OTG_HS_HCCHAR9</displayName>
    <description>OTG_HS host channel-9 characteristics
    register</description>
    <addressOffset>0x220</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR10</name>
    <displayName>OTG_HS_HCCHAR10</displayName>
    <description>OTG_HS host channel-10 characteristics
    register</description>
    <addressOffset>0x240</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCCHAR11</name>
    <displayName>OTG_HS_HCCHAR11</displayName>
    <description>OTG_HS host channel-11 characteristics
    register</description>
    <addressOffset>0x260</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>11</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EPDIR</name>
        <description>Endpoint direction</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSDEV</name>
        <description>Low-speed device</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MC</name>
        <description>Multi Count (MC) / Error Count
        (EC)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>22</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ODDFRM</name>
        <description>Odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHDIS</name>
        <description>Channel disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHENA</name>
        <description>Channel enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT0</name>
    <displayName>OTG_HS_HCSPLT0</displayName>
    <description>OTG_HS host channel-0 split control
    register</description>
    <addressOffset>0x104</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT1</name>
    <displayName>OTG_HS_HCSPLT1</displayName>
    <description>OTG_HS host channel-1 split control
    register</description>
    <addressOffset>0x124</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT2</name>
    <displayName>OTG_HS_HCSPLT2</displayName>
    <description>OTG_HS host channel-2 split control
    register</description>
    <addressOffset>0x144</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT3</name>
    <displayName>OTG_HS_HCSPLT3</displayName>
    <description>OTG_HS host channel-3 split control
    register</description>
    <addressOffset>0x164</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT4</name>
    <displayName>OTG_HS_HCSPLT4</displayName>
    <description>OTG_HS host channel-4 split control
    register</description>
    <addressOffset>0x184</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT5</name>
    <displayName>OTG_HS_HCSPLT5</displayName>
    <description>OTG_HS host channel-5 split control
    register</description>
    <addressOffset>0x1A4</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT6</name>
    <displayName>OTG_HS_HCSPLT6</displayName>
    <description>OTG_HS host channel-6 split control
    register</description>
    <addressOffset>0x1C4</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT7</name>
    <displayName>OTG_HS_HCSPLT7</displayName>
    <description>OTG_HS host channel-7 split control
    register</description>
    <addressOffset>0x1E4</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT8</name>
    <displayName>OTG_HS_HCSPLT8</displayName>
    <description>OTG_HS host channel-8 split control
    register</description>
    <addressOffset>0x204</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT9</name>
    <displayName>OTG_HS_HCSPLT9</displayName>
    <description>OTG_HS host channel-9 split control
    register</description>
    <addressOffset>0x224</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT10</name>
    <displayName>OTG_HS_HCSPLT10</displayName>
    <description>OTG_HS host channel-10 split control
    register</description>
    <addressOffset>0x244</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCSPLT11</name>
    <displayName>OTG_HS_HCSPLT11</displayName>
    <description>OTG_HS host channel-11 split control
    register</description>
    <addressOffset>0x264</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PRTADDR</name>
        <description>Port address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>HUBADDR</name>
        <description>Hub address</description>
        <bitOffset>7</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>XACTPOS</name>
        <description>XACTPOS</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>COMPLSPLT</name>
        <description>Do complete split</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPLITEN</name>
        <description>Split enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT0</name>
    <displayName>OTG_HS_HCINT0</displayName>
    <description>OTG_HS host channel-11 interrupt
    register</description>
    <addressOffset>0x108</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT1</name>
    <displayName>OTG_HS_HCINT1</displayName>
    <description>OTG_HS host channel-1 interrupt
    register</description>
    <addressOffset>0x128</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT2</name>
    <displayName>OTG_HS_HCINT2</displayName>
    <description>OTG_HS host channel-2 interrupt
    register</description>
    <addressOffset>0x148</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT3</name>
    <displayName>OTG_HS_HCINT3</displayName>
    <description>OTG_HS host channel-3 interrupt
    register</description>
    <addressOffset>0x168</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT4</name>
    <displayName>OTG_HS_HCINT4</displayName>
    <description>OTG_HS host channel-4 interrupt
    register</description>
    <addressOffset>0x188</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT5</name>
    <displayName>OTG_HS_HCINT5</displayName>
    <description>OTG_HS host channel-5 interrupt
    register</description>
    <addressOffset>0x1A8</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT6</name>
    <displayName>OTG_HS_HCINT6</displayName>
    <description>OTG_HS host channel-6 interrupt
    register</description>
    <addressOffset>0x1C8</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT7</name>
    <displayName>OTG_HS_HCINT7</displayName>
    <description>OTG_HS host channel-7 interrupt
    register</description>
    <addressOffset>0x1E8</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT8</name>
    <displayName>OTG_HS_HCINT8</displayName>
    <description>OTG_HS host channel-8 interrupt
    register</description>
    <addressOffset>0x208</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT9</name>
    <displayName>OTG_HS_HCINT9</displayName>
    <description>OTG_HS host channel-9 interrupt
    register</description>
    <addressOffset>0x228</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT10</name>
    <displayName>OTG_HS_HCINT10</displayName>
    <description>OTG_HS host channel-10 interrupt
    register</description>
    <addressOffset>0x248</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINT11</name>
    <displayName>OTG_HS_HCINT11</displayName>
    <description>OTG_HS host channel-11 interrupt
    register</description>
    <addressOffset>0x268</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHH</name>
        <description>Channel halted</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALL</name>
        <description>STALL response received
        interrupt</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK response received
        interrupt</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK response received/transmitted
        interrupt</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>Response received
        interrupt</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERR</name>
        <description>Transaction error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERR</name>
        <description>Babble error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMOR</name>
        <description>Frame overrun</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERR</name>
        <description>Data toggle error</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK0</name>
    <displayName>OTG_HS_HCINTMSK0</displayName>
    <description>OTG_HS host channel-11 interrupt mask
    register</description>
    <addressOffset>0x10C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK1</name>
    <displayName>OTG_HS_HCINTMSK1</displayName>
    <description>OTG_HS host channel-1 interrupt mask
    register</description>
    <addressOffset>0x12C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK2</name>
    <displayName>OTG_HS_HCINTMSK2</displayName>
    <description>OTG_HS host channel-2 interrupt mask
    register</description>
    <addressOffset>0x14C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK3</name>
    <displayName>OTG_HS_HCINTMSK3</displayName>
    <description>OTG_HS host channel-3 interrupt mask
    register</description>
    <addressOffset>0x16C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK4</name>
    <displayName>OTG_HS_HCINTMSK4</displayName>
    <description>OTG_HS host channel-4 interrupt mask
    register</description>
    <addressOffset>0x18C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK5</name>
    <displayName>OTG_HS_HCINTMSK5</displayName>
    <description>OTG_HS host channel-5 interrupt mask
    register</description>
    <addressOffset>0x1AC</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK6</name>
    <displayName>OTG_HS_HCINTMSK6</displayName>
    <description>OTG_HS host channel-6 interrupt mask
    register</description>
    <addressOffset>0x1CC</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK7</name>
    <displayName>OTG_HS_HCINTMSK7</displayName>
    <description>OTG_HS host channel-7 interrupt mask
    register</description>
    <addressOffset>0x1EC</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK8</name>
    <displayName>OTG_HS_HCINTMSK8</displayName>
    <description>OTG_HS host channel-8 interrupt mask
    register</description>
    <addressOffset>0x20C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK9</name>
    <displayName>OTG_HS_HCINTMSK9</displayName>
    <description>OTG_HS host channel-9 interrupt mask
    register</description>
    <addressOffset>0x22C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK10</name>
    <displayName>OTG_HS_HCINTMSK10</displayName>
    <description>OTG_HS host channel-10 interrupt mask
    register</description>
    <addressOffset>0x24C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCINTMSK11</name>
    <displayName>OTG_HS_HCINTMSK11</displayName>
    <description>OTG_HS host channel-11 interrupt mask
    register</description>
    <addressOffset>0x26C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHHM</name>
        <description>Channel halted mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AHBERR</name>
        <description>AHB error</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STALLM</name>
        <description>STALL response received interrupt
        mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK response received interrupt
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACKM</name>
        <description>ACK response received/transmitted
        interrupt mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>response received interrupt
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXERRM</name>
        <description>Transaction error mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BBERRM</name>
        <description>Babble error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRMORM</name>
        <description>Frame overrun mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTERRM</name>
        <description>Data toggle error mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ0</name>
    <displayName>OTG_HS_HCTSIZ0</displayName>
    <description>OTG_HS host channel-11 transfer size
    register</description>
    <addressOffset>0x110</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ1</name>
    <displayName>OTG_HS_HCTSIZ1</displayName>
    <description>OTG_HS host channel-1 transfer size
    register</description>
    <addressOffset>0x130</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ2</name>
    <displayName>OTG_HS_HCTSIZ2</displayName>
    <description>OTG_HS host channel-2 transfer size
    register</description>
    <addressOffset>0x150</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ3</name>
    <displayName>OTG_HS_HCTSIZ3</displayName>
    <description>OTG_HS host channel-3 transfer size
    register</description>
    <addressOffset>0x170</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ4</name>
    <displayName>OTG_HS_HCTSIZ4</displayName>
    <description>OTG_HS host channel-4 transfer size
    register</description>
    <addressOffset>0x190</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ5</name>
    <displayName>OTG_HS_HCTSIZ5</displayName>
    <description>OTG_HS host channel-5 transfer size
    register</description>
    <addressOffset>0x1B0</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ6</name>
    <displayName>OTG_HS_HCTSIZ6</displayName>
    <description>OTG_HS host channel-6 transfer size
    register</description>
    <addressOffset>0x1D0</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ7</name>
    <displayName>OTG_HS_HCTSIZ7</displayName>
    <description>OTG_HS host channel-7 transfer size
    register</description>
    <addressOffset>0x1F0</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ8</name>
    <displayName>OTG_HS_HCTSIZ8</displayName>
    <description>OTG_HS host channel-8 transfer size
    register</description>
    <addressOffset>0x210</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ9</name>
    <displayName>OTG_HS_HCTSIZ9</displayName>
    <description>OTG_HS host channel-9 transfer size
    register</description>
    <addressOffset>0x230</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ10</name>
    <displayName>OTG_HS_HCTSIZ10</displayName>
    <description>OTG_HS host channel-10 transfer size
    register</description>
    <addressOffset>0x250</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCTSIZ11</name>
    <displayName>OTG_HS_HCTSIZ11</displayName>
    <description>OTG_HS host channel-11 transfer size
    register</description>
    <addressOffset>0x270</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>19</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA0</name>
    <displayName>OTG_HS_HCDMA0</displayName>
    <description>OTG_HS host channel-0 DMA address
    register</description>
    <addressOffset>0x114</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA1</name>
    <displayName>OTG_HS_HCDMA1</displayName>
    <description>OTG_HS host channel-1 DMA address
    register</description>
    <addressOffset>0x134</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA2</name>
    <displayName>OTG_HS_HCDMA2</displayName>
    <description>OTG_HS host channel-2 DMA address
    register</description>
    <addressOffset>0x154</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA3</name>
    <displayName>OTG_HS_HCDMA3</displayName>
    <description>OTG_HS host channel-3 DMA address
    register</description>
    <addressOffset>0x174</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA4</name>
    <displayName>OTG_HS_HCDMA4</displayName>
    <description>OTG_HS host channel-4 DMA address
    register</description>
    <addressOffset>0x194</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA5</name>
    <displayName>OTG_HS_HCDMA5</displayName>
    <description>OTG_HS host channel-5 DMA address
    register</description>
    <addressOffset>0x1B4</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA6</name>
    <displayName>OTG_HS_HCDMA6</displayName>
    <description>OTG_HS host channel-6 DMA address
    register</description>
    <addressOffset>0x1D4</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA7</name>
    <displayName>OTG_HS_HCDMA7</displayName>
    <description>OTG_HS host channel-7 DMA address
    register</description>
    <addressOffset>0x1F4</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA8</name>
    <displayName>OTG_HS_HCDMA8</displayName>
    <description>OTG_HS host channel-8 DMA address
    register</description>
    <addressOffset>0x214</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA9</name>
    <displayName>OTG_HS_HCDMA9</displayName>
    <description>OTG_HS host channel-9 DMA address
    register</description>
    <addressOffset>0x234</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA10</name>
    <displayName>OTG_HS_HCDMA10</displayName>
    <description>OTG_HS host channel-10 DMA address
    register</description>
    <addressOffset>0x254</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_HCDMA11</name>
    <displayName>OTG_HS_HCDMA11</displayName>
    <description>OTG_HS host channel-11 DMA address
    register</description>
    <addressOffset>0x274</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>DMAADDR</name>
        <description>DMA address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
</registers>
