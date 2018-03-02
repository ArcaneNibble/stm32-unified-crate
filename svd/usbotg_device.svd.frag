<description>USB on the go high speed</description>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>OTG_HS_DCFG</name>
    <displayName>OTG_HS_DCFG</displayName>
    <description>OTG_HS device configuration
    register</description>
    <addressOffset>0x0</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x02200000</resetValue>
    <fields>
      <field>
        <name>DSPD</name>
        <description>Device speed</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>NZLSOHSK</name>
        <description>Nonzero-length status OUT
        handshake</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DAD</name>
        <description>Device address</description>
        <bitOffset>4</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>PFIVL</name>
        <description>Periodic (micro)frame
        interval</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PERSCHIVL</name>
        <description>Periodic scheduling
        interval</description>
        <bitOffset>24</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DCTL</name>
    <displayName>OTG_HS_DCTL</displayName>
    <description>OTG_HS device control register</description>
    <addressOffset>0x4</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>RWUSIG</name>
        <description>Remote wakeup signaling</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SDIS</name>
        <description>Soft disconnect</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>GINSTS</name>
        <description>Global IN NAK status</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>GONSTS</name>
        <description>Global OUT NAK status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TCTL</name>
        <description>Test control</description>
        <bitOffset>4</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SGINAK</name>
        <description>Set global IN NAK</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>CGINAK</name>
        <description>Clear global IN NAK</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SGONAK</name>
        <description>Set global OUT NAK</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>CGONAK</name>
        <description>Clear global OUT NAK</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>POPRGDNE</name>
        <description>Power-on programming done</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DSTS</name>
    <displayName>OTG_HS_DSTS</displayName>
    <description>OTG_HS device status register</description>
    <addressOffset>0x8</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x00000010</resetValue>
    <fields>
      <field>
        <name>SUSPSTS</name>
        <description>Suspend status</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ENUMSPD</name>
        <description>Enumerated speed</description>
        <bitOffset>1</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>EERR</name>
        <description>Erratic error</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FNSOF</name>
        <description>Frame number of the received
        SOF</description>
        <bitOffset>8</bitOffset>
        <bitWidth>14</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPMSK</name>
    <displayName>OTG_HS_DIEPMSK</displayName>
    <description>OTG_HS device IN endpoint common interrupt
    mask register</description>
    <addressOffset>0x10</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed interrupt
        mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDM</name>
        <description>Endpoint disabled interrupt
        mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TOM</name>
        <description>Timeout condition mask (nonisochronous
        endpoints)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ITTXFEMSK</name>
        <description>IN token received when TxFIFO empty
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>INEPNMM</name>
        <description>IN token received with EP mismatch
        mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>INEPNEM</name>
        <description>IN endpoint NAK effective
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXFURM</name>
        <description>FIFO underrun mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BIM</name>
        <description>BNA interrupt mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPMSK</name>
    <displayName>OTG_HS_DOEPMSK</displayName>
    <description>OTG_HS device OUT endpoint common interrupt
    mask register</description>
    <addressOffset>0x14</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed interrupt
        mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDM</name>
        <description>Endpoint disabled interrupt
        mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STUPM</name>
        <description>SETUP phase done mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OTEPDM</name>
        <description>OUT token received when endpoint
        disabled mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>B2BSTUP</name>
        <description>Back-to-back SETUP packets received
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OPEM</name>
        <description>OUT packet error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BOIM</name>
        <description>BNA interrupt mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DAINT</name>
    <displayName>OTG_HS_DAINT</displayName>
    <description>OTG_HS device all endpoints interrupt
    register</description>
    <addressOffset>0x18</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>IEPINT</name>
        <description>IN endpoint interrupt bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>OEPINT</name>
        <description>OUT endpoint interrupt
        bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DAINTMSK</name>
    <displayName>OTG_HS_DAINTMSK</displayName>
    <description>OTG_HS all endpoints interrupt mask
    register</description>
    <addressOffset>0x1C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>IEPM</name>
        <description>IN EP interrupt mask bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>OEPM</name>
        <description>OUT EP interrupt mask bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DVBUSDIS</name>
    <displayName>OTG_HS_DVBUSDIS</displayName>
    <description>OTG_HS device VBUS discharge time
    register</description>
    <addressOffset>0x28</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x000017D7</resetValue>
    <fields>
      <field>
        <name>VBUSDT</name>
        <description>Device VBUS discharge time</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DVBUSPULSE</name>
    <displayName>OTG_HS_DVBUSPULSE</displayName>
    <description>OTG_HS device VBUS pulsing time
    register</description>
    <addressOffset>0x2C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x000005B8</resetValue>
    <fields>
      <field>
        <name>DVBUSP</name>
        <description>Device VBUS pulsing time</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DTHRCTL</name>
    <displayName>OTG_HS_DTHRCTL</displayName>
    <description>OTG_HS Device threshold control
    register</description>
    <addressOffset>0x30</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>NONISOTHREN</name>
        <description>Nonisochronous IN endpoints threshold
        enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ISOTHREN</name>
        <description>ISO IN endpoint threshold
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXTHRLEN</name>
        <description>Transmit threshold length</description>
        <bitOffset>2</bitOffset>
        <bitWidth>9</bitWidth>
      </field>
      <field>
        <name>RXTHREN</name>
        <description>Receive threshold enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXTHRLEN</name>
        <description>Receive threshold length</description>
        <bitOffset>17</bitOffset>
        <bitWidth>9</bitWidth>
      </field>
      <field>
        <name>ARPEN</name>
        <description>Arbiter parking enable</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPEMPMSK</name>
    <displayName>OTG_HS_DIEPEMPMSK</displayName>
    <description>OTG_HS device IN endpoint FIFO empty
    interrupt mask register</description>
    <addressOffset>0x34</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>INEPTXFEM</name>
        <description>IN EP Tx FIFO empty interrupt mask
        bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DEACHINT</name>
    <displayName>OTG_HS_DEACHINT</displayName>
    <description>OTG_HS device each endpoint interrupt
    register</description>
    <addressOffset>0x38</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>IEP1INT</name>
        <description>IN endpoint 1interrupt bit</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OEP1INT</name>
        <description>OUT endpoint 1 interrupt
        bit</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DEACHINTMSK</name>
    <displayName>OTG_HS_DEACHINTMSK</displayName>
    <description>OTG_HS device each endpoint interrupt
    register mask</description>
    <addressOffset>0x3C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>IEP1INTM</name>
        <description>IN Endpoint 1 interrupt mask
        bit</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OEP1INTM</name>
        <description>OUT Endpoint 1 interrupt mask
        bit</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPEACHMSK1</name>
    <displayName>OTG_HS_DIEPEACHMSK1</displayName>
    <description>OTG_HS device each in endpoint-1 interrupt
    register</description>
    <addressOffset>0x40</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed interrupt
        mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDM</name>
        <description>Endpoint disabled interrupt
        mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TOM</name>
        <description>Timeout condition mask (nonisochronous
        endpoints)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ITTXFEMSK</name>
        <description>IN token received when TxFIFO empty
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>INEPNMM</name>
        <description>IN token received with EP mismatch
        mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>INEPNEM</name>
        <description>IN endpoint NAK effective
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXFURM</name>
        <description>FIFO underrun mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BIM</name>
        <description>BNA interrupt mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK interrupt mask</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPEACHMSK1</name>
    <displayName>OTG_HS_DOEPEACHMSK1</displayName>
    <description>OTG_HS device each OUT endpoint-1 interrupt
    register</description>
    <addressOffset>0x80</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRCM</name>
        <description>Transfer completed interrupt
        mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDM</name>
        <description>Endpoint disabled interrupt
        mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TOM</name>
        <description>Timeout condition mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ITTXFEMSK</name>
        <description>IN token received when TxFIFO empty
        mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>INEPNMM</name>
        <description>IN token received with EP mismatch
        mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>INEPNEM</name>
        <description>IN endpoint NAK effective
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXFURM</name>
        <description>OUT packet error mask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BIM</name>
        <description>BNA interrupt mask</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BERRM</name>
        <description>Bubble error interrupt
        mask</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NAKM</name>
        <description>NAK interrupt mask</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYETM</name>
        <description>NYET interrupt mask</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPCTL0</name>
    <displayName>OTG_HS_DIEPCTL0</displayName>
    <description>OTG device endpoint-0 control
    register</description>
    <addressOffset>0x100</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even/odd frame</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFNUM</name>
        <description>TxFIFO number</description>
        <bitOffset>22</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPCTL1</name>
    <displayName>OTG_HS_DIEPCTL1</displayName>
    <description>OTG device endpoint-1 control
    register</description>
    <addressOffset>0x120</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even/odd frame</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFNUM</name>
        <description>TxFIFO number</description>
        <bitOffset>22</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPCTL2</name>
    <displayName>OTG_HS_DIEPCTL2</displayName>
    <description>OTG device endpoint-2 control
    register</description>
    <addressOffset>0x140</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even/odd frame</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFNUM</name>
        <description>TxFIFO number</description>
        <bitOffset>22</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPCTL3</name>
    <displayName>OTG_HS_DIEPCTL3</displayName>
    <description>OTG device endpoint-3 control
    register</description>
    <addressOffset>0x160</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even/odd frame</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFNUM</name>
        <description>TxFIFO number</description>
        <bitOffset>22</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPCTL4</name>
    <displayName>OTG_HS_DIEPCTL4</displayName>
    <description>OTG device endpoint-4 control
    register</description>
    <addressOffset>0x180</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even/odd frame</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFNUM</name>
        <description>TxFIFO number</description>
        <bitOffset>22</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPCTL5</name>
    <displayName>OTG_HS_DIEPCTL5</displayName>
    <description>OTG device endpoint-5 control
    register</description>
    <addressOffset>0x1A0</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even/odd frame</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFNUM</name>
        <description>TxFIFO number</description>
        <bitOffset>22</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPCTL6</name>
    <displayName>OTG_HS_DIEPCTL6</displayName>
    <description>OTG device endpoint-6 control
    register</description>
    <addressOffset>0x1C0</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even/odd frame</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFNUM</name>
        <description>TxFIFO number</description>
        <bitOffset>22</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPCTL7</name>
    <displayName>OTG_HS_DIEPCTL7</displayName>
    <description>OTG device endpoint-7 control
    register</description>
    <addressOffset>0x1E0</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even/odd frame</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFNUM</name>
        <description>TxFIFO number</description>
        <bitOffset>22</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPINT0</name>
    <displayName>OTG_HS_DIEPINT0</displayName>
    <description>OTG device endpoint-0 interrupt
    register</description>
    <addressOffset>0x108</addressOffset>
    <size>32</size>
    <resetValue>0x00000080</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TOC</name>
        <description>Timeout condition</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ITTXFE</name>
        <description>IN token received when TxFIFO is
        empty</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>INEPNE</name>
        <description>IN endpoint NAK effective</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFE</name>
        <description>Transmit FIFO empty</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TXFIFOUDRN</name>
        <description>Transmit Fifo Underrun</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BNA</name>
        <description>Buffer not available
        interrupt</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PKTDRPSTS</name>
        <description>Packet dropped status</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BERR</name>
        <description>Babble error interrupt</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK interrupt</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPINT1</name>
    <displayName>OTG_HS_DIEPINT1</displayName>
    <description>OTG device endpoint-1 interrupt
    register</description>
    <addressOffset>0x128</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TOC</name>
        <description>Timeout condition</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ITTXFE</name>
        <description>IN token received when TxFIFO is
        empty</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>INEPNE</name>
        <description>IN endpoint NAK effective</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFE</name>
        <description>Transmit FIFO empty</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TXFIFOUDRN</name>
        <description>Transmit Fifo Underrun</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BNA</name>
        <description>Buffer not available
        interrupt</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PKTDRPSTS</name>
        <description>Packet dropped status</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BERR</name>
        <description>Babble error interrupt</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK interrupt</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPINT2</name>
    <displayName>OTG_HS_DIEPINT2</displayName>
    <description>OTG device endpoint-2 interrupt
    register</description>
    <addressOffset>0x148</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TOC</name>
        <description>Timeout condition</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ITTXFE</name>
        <description>IN token received when TxFIFO is
        empty</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>INEPNE</name>
        <description>IN endpoint NAK effective</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFE</name>
        <description>Transmit FIFO empty</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TXFIFOUDRN</name>
        <description>Transmit Fifo Underrun</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BNA</name>
        <description>Buffer not available
        interrupt</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PKTDRPSTS</name>
        <description>Packet dropped status</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BERR</name>
        <description>Babble error interrupt</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK interrupt</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPINT3</name>
    <displayName>OTG_HS_DIEPINT3</displayName>
    <description>OTG device endpoint-3 interrupt
    register</description>
    <addressOffset>0x168</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TOC</name>
        <description>Timeout condition</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ITTXFE</name>
        <description>IN token received when TxFIFO is
        empty</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>INEPNE</name>
        <description>IN endpoint NAK effective</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFE</name>
        <description>Transmit FIFO empty</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TXFIFOUDRN</name>
        <description>Transmit Fifo Underrun</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BNA</name>
        <description>Buffer not available
        interrupt</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PKTDRPSTS</name>
        <description>Packet dropped status</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BERR</name>
        <description>Babble error interrupt</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK interrupt</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPINT4</name>
    <displayName>OTG_HS_DIEPINT4</displayName>
    <description>OTG device endpoint-4 interrupt
    register</description>
    <addressOffset>0x188</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TOC</name>
        <description>Timeout condition</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ITTXFE</name>
        <description>IN token received when TxFIFO is
        empty</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>INEPNE</name>
        <description>IN endpoint NAK effective</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFE</name>
        <description>Transmit FIFO empty</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TXFIFOUDRN</name>
        <description>Transmit Fifo Underrun</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BNA</name>
        <description>Buffer not available
        interrupt</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PKTDRPSTS</name>
        <description>Packet dropped status</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BERR</name>
        <description>Babble error interrupt</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK interrupt</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPINT5</name>
    <displayName>OTG_HS_DIEPINT5</displayName>
    <description>OTG device endpoint-5 interrupt
    register</description>
    <addressOffset>0x1A8</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TOC</name>
        <description>Timeout condition</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ITTXFE</name>
        <description>IN token received when TxFIFO is
        empty</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>INEPNE</name>
        <description>IN endpoint NAK effective</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFE</name>
        <description>Transmit FIFO empty</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TXFIFOUDRN</name>
        <description>Transmit Fifo Underrun</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BNA</name>
        <description>Buffer not available
        interrupt</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PKTDRPSTS</name>
        <description>Packet dropped status</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BERR</name>
        <description>Babble error interrupt</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK interrupt</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPINT6</name>
    <displayName>OTG_HS_DIEPINT6</displayName>
    <description>OTG device endpoint-6 interrupt
    register</description>
    <addressOffset>0x1C8</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TOC</name>
        <description>Timeout condition</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ITTXFE</name>
        <description>IN token received when TxFIFO is
        empty</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>INEPNE</name>
        <description>IN endpoint NAK effective</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFE</name>
        <description>Transmit FIFO empty</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TXFIFOUDRN</name>
        <description>Transmit Fifo Underrun</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BNA</name>
        <description>Buffer not available
        interrupt</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PKTDRPSTS</name>
        <description>Packet dropped status</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BERR</name>
        <description>Babble error interrupt</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK interrupt</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPINT7</name>
    <displayName>OTG_HS_DIEPINT7</displayName>
    <description>OTG device endpoint-7 interrupt
    register</description>
    <addressOffset>0x1E8</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TOC</name>
        <description>Timeout condition</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ITTXFE</name>
        <description>IN token received when TxFIFO is
        empty</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>INEPNE</name>
        <description>IN endpoint NAK effective</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFE</name>
        <description>Transmit FIFO empty</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TXFIFOUDRN</name>
        <description>Transmit Fifo Underrun</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BNA</name>
        <description>Buffer not available
        interrupt</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PKTDRPSTS</name>
        <description>Packet dropped status</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BERR</name>
        <description>Babble error interrupt</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>NAK</name>
        <description>NAK interrupt</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPTSIZ0</name>
    <displayName>OTG_HS_DIEPTSIZ0</displayName>
    <description>OTG_HS device IN endpoint 0 transfer size
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
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPDMA1</name>
    <displayName>OTG_HS_DIEPDMA1</displayName>
    <description>OTG_HS device endpoint-1 DMA address
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
    <name>OTG_HS_DIEPDMA2</name>
    <displayName>OTG_HS_DIEPDMA2</displayName>
    <description>OTG_HS device endpoint-2 DMA address
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
    <name>OTG_HS_DIEPDMA3</name>
    <displayName>OTG_HS_DIEPDMA3</displayName>
    <description>OTG_HS device endpoint-3 DMA address
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
    <name>OTG_HS_DIEPDMA4</name>
    <displayName>OTG_HS_DIEPDMA4</displayName>
    <description>OTG_HS device endpoint-4 DMA address
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
    <name>OTG_HS_DIEPDMA5</name>
    <displayName>OTG_HS_DIEPDMA5</displayName>
    <description>OTG_HS device endpoint-5 DMA address
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
    <name>OTG_HS_DTXFSTS0</name>
    <displayName>OTG_HS_DTXFSTS0</displayName>
    <description>OTG_HS device IN endpoint transmit FIFO
    status register</description>
    <addressOffset>0x118</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>INEPTFSAV</name>
        <description>IN endpoint TxFIFO space
        avail</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DTXFSTS1</name>
    <displayName>OTG_HS_DTXFSTS1</displayName>
    <description>OTG_HS device IN endpoint transmit FIFO
    status register</description>
    <addressOffset>0x138</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>INEPTFSAV</name>
        <description>IN endpoint TxFIFO space
        avail</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DTXFSTS2</name>
    <displayName>OTG_HS_DTXFSTS2</displayName>
    <description>OTG_HS device IN endpoint transmit FIFO
    status register</description>
    <addressOffset>0x158</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>INEPTFSAV</name>
        <description>IN endpoint TxFIFO space
        avail</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DTXFSTS3</name>
    <displayName>OTG_HS_DTXFSTS3</displayName>
    <description>OTG_HS device IN endpoint transmit FIFO
    status register</description>
    <addressOffset>0x178</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>INEPTFSAV</name>
        <description>IN endpoint TxFIFO space
        avail</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DTXFSTS4</name>
    <displayName>OTG_HS_DTXFSTS4</displayName>
    <description>OTG_HS device IN endpoint transmit FIFO
    status register</description>
    <addressOffset>0x198</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>INEPTFSAV</name>
        <description>IN endpoint TxFIFO space
        avail</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DTXFSTS5</name>
    <displayName>OTG_HS_DTXFSTS5</displayName>
    <description>OTG_HS device IN endpoint transmit FIFO
    status register</description>
    <addressOffset>0x1B8</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>INEPTFSAV</name>
        <description>IN endpoint TxFIFO space
        avail</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPTSIZ1</name>
    <displayName>OTG_HS_DIEPTSIZ1</displayName>
    <description>OTG_HS device endpoint transfer size
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
        <name>MCNT</name>
        <description>Multi count</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPTSIZ2</name>
    <displayName>OTG_HS_DIEPTSIZ2</displayName>
    <description>OTG_HS device endpoint transfer size
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
        <name>MCNT</name>
        <description>Multi count</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPTSIZ3</name>
    <displayName>OTG_HS_DIEPTSIZ3</displayName>
    <description>OTG_HS device endpoint transfer size
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
        <name>MCNT</name>
        <description>Multi count</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPTSIZ4</name>
    <displayName>OTG_HS_DIEPTSIZ4</displayName>
    <description>OTG_HS device endpoint transfer size
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
        <name>MCNT</name>
        <description>Multi count</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DIEPTSIZ5</name>
    <displayName>OTG_HS_DIEPTSIZ5</displayName>
    <description>OTG_HS device endpoint transfer size
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
        <name>MCNT</name>
        <description>Multi count</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPCTL0</name>
    <displayName>OTG_HS_DOEPCTL0</displayName>
    <description>OTG_HS device control OUT endpoint 0 control
    register</description>
    <addressOffset>0x300</addressOffset>
    <size>32</size>
    <resetValue>0x00008000</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>SNPM</name>
        <description>Snoop mode</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPCTL1</name>
    <displayName>OTG_HS_DOEPCTL1</displayName>
    <description>OTG device endpoint-1 control
    register</description>
    <addressOffset>0x320</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even odd frame/Endpoint data
        PID</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SNPM</name>
        <description>Snoop mode</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID/Set even
        frame</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPCTL2</name>
    <displayName>OTG_HS_DOEPCTL2</displayName>
    <description>OTG device endpoint-2 control
    register</description>
    <addressOffset>0x340</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even odd frame/Endpoint data
        PID</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SNPM</name>
        <description>Snoop mode</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID/Set even
        frame</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPCTL3</name>
    <displayName>OTG_HS_DOEPCTL3</displayName>
    <description>OTG device endpoint-3 control
    register</description>
    <addressOffset>0x360</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MPSIZ</name>
        <description>Maximum packet size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBAEP</name>
        <description>USB active endpoint</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EONUM_DPID</name>
        <description>Even odd frame/Endpoint data
        PID</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NAKSTS</name>
        <description>NAK status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPTYP</name>
        <description>Endpoint type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SNPM</name>
        <description>Snoop mode</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>Stall</name>
        <description>STALL handshake</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CNAK</name>
        <description>Clear NAK</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SNAK</name>
        <description>Set NAK</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SD0PID_SEVNFRM</name>
        <description>Set DATA0 PID/Set even
        frame</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SODDFRM</name>
        <description>Set odd frame</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>EPDIS</name>
        <description>Endpoint disable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPENA</name>
        <description>Endpoint enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPINT0</name>
    <displayName>OTG_HS_DOEPINT0</displayName>
    <description>OTG_HS device endpoint-0 interrupt
    register</description>
    <addressOffset>0x308</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x00000080</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STUP</name>
        <description>SETUP phase done</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OTEPDIS</name>
        <description>OUT token received when endpoint
        disabled</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>B2BSTUP</name>
        <description>Back-to-back SETUP packets
        received</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>NYET interrupt</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPINT1</name>
    <displayName>OTG_HS_DOEPINT1</displayName>
    <description>OTG_HS device endpoint-1 interrupt
    register</description>
    <addressOffset>0x328</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STUP</name>
        <description>SETUP phase done</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OTEPDIS</name>
        <description>OUT token received when endpoint
        disabled</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>B2BSTUP</name>
        <description>Back-to-back SETUP packets
        received</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>NYET interrupt</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPINT2</name>
    <displayName>OTG_HS_DOEPINT2</displayName>
    <description>OTG_HS device endpoint-2 interrupt
    register</description>
    <addressOffset>0x348</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STUP</name>
        <description>SETUP phase done</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OTEPDIS</name>
        <description>OUT token received when endpoint
        disabled</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>B2BSTUP</name>
        <description>Back-to-back SETUP packets
        received</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>NYET interrupt</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPINT3</name>
    <displayName>OTG_HS_DOEPINT3</displayName>
    <description>OTG_HS device endpoint-3 interrupt
    register</description>
    <addressOffset>0x368</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STUP</name>
        <description>SETUP phase done</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OTEPDIS</name>
        <description>OUT token received when endpoint
        disabled</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>B2BSTUP</name>
        <description>Back-to-back SETUP packets
        received</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>NYET interrupt</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPINT4</name>
    <displayName>OTG_HS_DOEPINT4</displayName>
    <description>OTG_HS device endpoint-4 interrupt
    register</description>
    <addressOffset>0x388</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STUP</name>
        <description>SETUP phase done</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OTEPDIS</name>
        <description>OUT token received when endpoint
        disabled</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>B2BSTUP</name>
        <description>Back-to-back SETUP packets
        received</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>NYET interrupt</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPINT5</name>
    <displayName>OTG_HS_DOEPINT5</displayName>
    <description>OTG_HS device endpoint-5 interrupt
    register</description>
    <addressOffset>0x3A8</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STUP</name>
        <description>SETUP phase done</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OTEPDIS</name>
        <description>OUT token received when endpoint
        disabled</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>B2BSTUP</name>
        <description>Back-to-back SETUP packets
        received</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>NYET interrupt</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPINT6</name>
    <displayName>OTG_HS_DOEPINT6</displayName>
    <description>OTG_HS device endpoint-6 interrupt
    register</description>
    <addressOffset>0x3C8</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STUP</name>
        <description>SETUP phase done</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OTEPDIS</name>
        <description>OUT token received when endpoint
        disabled</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>B2BSTUP</name>
        <description>Back-to-back SETUP packets
        received</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>NYET interrupt</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPINT7</name>
    <displayName>OTG_HS_DOEPINT7</displayName>
    <description>OTG_HS device endpoint-7 interrupt
    register</description>
    <addressOffset>0x3E8</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRC</name>
        <description>Transfer completed
        interrupt</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPDISD</name>
        <description>Endpoint disabled
        interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STUP</name>
        <description>SETUP phase done</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OTEPDIS</name>
        <description>OUT token received when endpoint
        disabled</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>B2BSTUP</name>
        <description>Back-to-back SETUP packets
        received</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NYET</name>
        <description>NYET interrupt</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPTSIZ0</name>
    <displayName>OTG_HS_DOEPTSIZ0</displayName>
    <description>OTG_HS device endpoint-1 transfer size
    register</description>
    <addressOffset>0x310</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>XFRSIZ</name>
        <description>Transfer size</description>
        <bitOffset>0</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>PKTCNT</name>
        <description>Packet count</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STUPCNT</name>
        <description>SETUP packet count</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPTSIZ1</name>
    <displayName>OTG_HS_DOEPTSIZ1</displayName>
    <description>OTG_HS device endpoint-2 transfer size
    register</description>
    <addressOffset>0x330</addressOffset>
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
        <name>RXDPID_STUPCNT</name>
        <description>Received data PID/SETUP packet
        count</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPTSIZ2</name>
    <displayName>OTG_HS_DOEPTSIZ2</displayName>
    <description>OTG_HS device endpoint-3 transfer size
    register</description>
    <addressOffset>0x350</addressOffset>
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
        <name>RXDPID_STUPCNT</name>
        <description>Received data PID/SETUP packet
        count</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPTSIZ3</name>
    <displayName>OTG_HS_DOEPTSIZ3</displayName>
    <description>OTG_HS device endpoint-4 transfer size
    register</description>
    <addressOffset>0x370</addressOffset>
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
        <name>RXDPID_STUPCNT</name>
        <description>Received data PID/SETUP packet
        count</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OTG_HS_DOEPTSIZ4</name>
    <displayName>OTG_HS_DOEPTSIZ4</displayName>
    <description>OTG_HS device endpoint-5 transfer size
    register</description>
    <addressOffset>0x390</addressOffset>
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
        <name>RXDPID_STUPCNT</name>
        <description>Received data PID/SETUP packet
        count</description>
        <bitOffset>29</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
</registers>
