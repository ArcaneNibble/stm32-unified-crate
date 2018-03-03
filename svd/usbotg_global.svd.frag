#ifdef __USBOTG_HS
<description>USB on the go high speed</description>
#else
<description>USB on the go full speed</description>
#endif
<registers>
  <register>
    <name>GOTGCTL</name>
    <displayName>GOTGCTL</displayName>
    <description>OTG control and status
    register</description>
    <addressOffset>0x0</addressOffset>
    <size>32</size>
    <resetValue>0x00000800</resetValue>
    <fields>
      <field>
        <name>SRQSCS</name>
        <description>Session request success</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>SRQ</name>
        <description>Session request</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HNGSCS</name>
        <description>Host negotiation success</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>HNPRQ</name>
        <description>HNP request</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HSHNPEN</name>
        <description>Host set HNP enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>DHNPEN</name>
        <description>Device HNP enabled</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CIDSTS</name>
        <description>Connector ID status</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DBCT</name>
        <description>Long/short debounce time</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>ASVLD</name>
        <description>A-session valid</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>BSVLD</name>
        <description>B-session valid</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>GOTGINT</name>
    <displayName>GOTGINT</displayName>
    <description>OTG interrupt register</description>
    <addressOffset>0x4</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>SEDET</name>
        <description>Session end detected</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SRSSCHG</name>
        <description>Session request success status
        change</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HNSSCHG</name>
        <description>Host negotiation success status
        change</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HNGDET</name>
        <description>Host negotiation detected</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ADTOCHG</name>
        <description>A-device timeout change</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBCDNE</name>
        <description>Debounce done</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>GAHBCFG</name>
    <displayName>GAHBCFG</displayName>
    <description>OTG AHB configuration
    register</description>
    <addressOffset>0x8</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>GINT</name>
        <description>Global interrupt mask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#ifdef __USBOTG_HS
      <field>
        <name>HBSTLEN</name>
        <description>Burst length/type</description>
        <bitOffset>1</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>DMAEN</name>
        <description>DMA enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>TXFELVL</name>
        <description>TxFIFO empty level</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PTXFELVL</name>
        <description>Periodic TxFIFO empty
        level</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>GUSBCFG</name>
    <displayName>GUSBCFG</displayName>
    <description>OTG USB configuration
    register</description>
    <addressOffset>0xC</addressOffset>
    <size>32</size>
    <resetValue>0x00000A00</resetValue>
    <fields>
      <field>
        <name>TOCAL</name>
        <description>FS timeout calibration</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PHYSEL</name>
        <description>USB 2.0 high-speed ULPI PHY or USB 1.1
        full-speed serial transceiver select</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>SRPCAP</name>
        <description>SRP-capable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HNPCAP</name>
        <description>HNP-capable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TRDT</name>
        <description>USB turnaround time</description>
        <bitOffset>10</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
#ifdef __USBOTG_HS
      <field>
        <name>PHYLPCS</name>
        <description>PHY Low-power clock select</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ULPIFSLS</name>
        <description>ULPI FS/LS select</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ULPIAR</name>
        <description>ULPI Auto-resume</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ULPICSM</name>
        <description>ULPI Clock SuspendM</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ULPIEVBUSD</name>
        <description>ULPI External VBUS Drive</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ULPIEVBUSI</name>
        <description>ULPI external VBUS
        indicator</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TSDPS</name>
        <description>TermSel DLine pulsing
        selection</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PCCI</name>
        <description>Indicator complement</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PTCI</name>
        <description>Indicator pass through</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ULPIIPD</name>
        <description>ULPI interface protect
        disable</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
#endif
      <field>
        <name>FHMOD</name>
        <description>Forced host mode</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FDMOD</name>
        <description>Forced peripheral mode</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CTXPKT</name>
        <description>Corrupt Tx packet</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>GRSTCTL</name>
    <displayName>GRSTCTL</displayName>
    <description>OTG reset register</description>
    <addressOffset>0x10</addressOffset>
    <size>32</size>
    <resetValue>0x20000000</resetValue>
    <fields>
      <field>
        <name>CSRST</name>
        <description>Core soft reset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HSRST</name>
        <description>HCLK soft reset</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FCRST</name>
        <description>Host frame counter reset</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RXFFLSH</name>
        <description>RxFIFO flush</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFFLSH</name>
        <description>TxFIFO flush</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXFNUM</name>
        <description>TxFIFO number</description>
        <bitOffset>6</bitOffset>
        <bitWidth>5</bitWidth>
        <access>read-write</access>
      </field>
#ifdef __USBOTG_HS
      <field>
        <name>DMAREQ</name>
        <description>DMA request signal</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
#endif
      <field>
        <name>AHBIDL</name>
        <description>AHB master idle</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>GINTSTS</name>
    <displayName>GINTSTS</displayName>
    <description>OTG core interrupt register</description>
    <addressOffset>0x14</addressOffset>
    <size>32</size>
    <resetValue>0x04000020</resetValue>
    <fields>
      <field>
        <name>CMOD</name>
        <description>Current mode of operation</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>MMIS</name>
        <description>Mode mismatch interrupt</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>OTGINT</name>
        <description>OTG interrupt</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>SOF</name>
        <description>Start of frame</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RXFLVL</name>
        <description>RxFIFO nonempty</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NPTXFE</name>
        <description>Nonperiodic TxFIFO empty</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>GINAKEFF</name>
        <description>Global IN nonperiodic NAK
        effective</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>GOUTNAKEFF</name>
        <description>Global OUT NAK effective</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>ESUSP</name>
        <description>Early suspend</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBSUSP</name>
        <description>USB suspend</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBRST</name>
        <description>USB reset</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ENUMDNE</name>
        <description>Enumeration done</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ISOODRP</name>
        <description>Isochronous OUT packet dropped
        interrupt</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EOPF</name>
        <description>End of periodic frame
        interrupt</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>IEPINT</name>
        <description>IN endpoint interrupt</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>OEPINT</name>
        <description>OUT endpoint interrupt</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>IISOIXFR</name>
        <description>Incomplete isochronous IN
        transfer</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>IPXFR_INCOMPISOOUT</name>
        <description>Incomplete periodic
        transfer</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
#ifdef __USBOTG_HS
      <field>
        <name>DATAFSUSP</name>
        <description>Data fetch suspended</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
#endif
      <field>
        <name>HPRTINT</name>
        <description>Host port interrupt</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>HCINT</name>
        <description>Host channels interrupt</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PTXFE</name>
        <description>Periodic TxFIFO empty</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>CIDSCHG</name>
        <description>Connector ID status change</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>DISCINT</name>
        <description>Disconnect detected
        interrupt</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SRQINT</name>
        <description>Session request/new session detected
        interrupt</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>WKUINT</name>
        <description>Resume/remote wakeup detected
        interrupt</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>GINTMSK</name>
    <displayName>GINTMSK</displayName>
    <description>OTG interrupt mask register</description>
    <addressOffset>0x18</addressOffset>
    <size>32</size>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>MMISM</name>
        <description>Mode mismatch interrupt
        mask</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>OTGINT</name>
        <description>OTG interrupt mask</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SOFM</name>
        <description>Start of frame mask</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RXFLVLM</name>
        <description>Receive FIFO nonempty mask</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>NPTXFEM</name>
        <description>Nonperiodic TxFIFO empty
        mask</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>GINAKEFFM</name>
        <description>Global nonperiodic IN NAK effective
        mask</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>GONAKEFFM</name>
        <description>Global OUT NAK effective
        mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ESUSPM</name>
        <description>Early suspend mask</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBSUSPM</name>
        <description>USB suspend mask</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>USBRST</name>
        <description>USB reset mask</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ENUMDNEM</name>
        <description>Enumeration done mask</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ISOODRPM</name>
        <description>Isochronous OUT packet dropped interrupt
        mask</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EOPFM</name>
        <description>End of periodic frame interrupt
        mask</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>EPMISM</name>
        <description>Endpoint mismatch interrupt
        mask</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>IEPINT</name>
        <description>IN endpoints interrupt
        mask</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>OEPINT</name>
        <description>OUT endpoints interrupt
        mask</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>IISOIXFRM</name>
        <description>Incomplete isochronous IN transfer
        mask</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>IPXFRM_IISOOXFRM</name>
        <description>Incomplete periodic transfer
        mask</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
#ifdef __USBOTG_HS
      <field>
        <name>FSUSPM</name>
        <description>Data fetch suspended mask</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
#endif
      <field>
        <name>PRTIM</name>
        <description>Host port interrupt mask</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>HCIM</name>
        <description>Host channels interrupt
        mask</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PTXFEM</name>
        <description>Periodic TxFIFO empty mask</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CIDSCHGM</name>
        <description>Connector ID status change
        mask</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>DISCINT</name>
        <description>Disconnect detected interrupt
        mask</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SRQIM</name>
        <description>Session request/new session detected
        interrupt mask</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>WUIM</name>
        <description>Resume/remote wakeup detected interrupt
        mask</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>GRXSTSR_Host</name>
    <displayName>GRXSTSR_Host</displayName>
    <description>OTG Receive status debug read register
    (host mode)</description>
    <addressOffset>0x1C</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>CHNUM</name>
        <description>Channel number</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>BCNT</name>
        <description>Byte count</description>
        <bitOffset>4</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>15</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PKTSTS</name>
        <description>Packet status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>GRXSTSP_Host</name>
    <displayName>GRXSTSP_Host</displayName>
    <description>OTG status read and pop register (host
    mode)</description>
    <addressOffset>0x20</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>CHNUM</name>
        <description>Channel number</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>BCNT</name>
        <description>Byte count</description>
        <bitOffset>4</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>15</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PKTSTS</name>
        <description>Packet status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>GRXFSIZ</name>
    <displayName>GRXFSIZ</displayName>
    <description>OTG Receive FIFO size
    register</description>
    <addressOffset>0x24</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x00000200</resetValue>
    <fields>
      <field>
        <name>RXFD</name>
        <description>RxFIFO depth</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>GNPTXFSIZ_Host</name>
    <displayName>GNPTXFSIZ_Host</displayName>
    <description>OTG nonperiodic transmit FIFO size
    register (host mode)</description>
    <addressOffset>0x28</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x00000200</resetValue>
    <fields>
      <field>
        <name>NPTXFSA</name>
        <description>Nonperiodic transmit RAM start
        address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>NPTXFD</name>
        <description>Nonperiodic TxFIFO depth</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TX0FSIZ_Peripheral</name>
    <displayName>TX0FSIZ_Peripheral</displayName>
    <description>Endpoint 0 transmit FIFO size (peripheral
    mode)</description>
    <alternateRegister>GNPTXFSIZ_Host</alternateRegister>
    <addressOffset>0x28</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x00000200</resetValue>
    <fields>
      <field>
        <name>TX0FSA</name>
        <description>Endpoint 0 transmit RAM start
        address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>TX0FD</name>
        <description>Endpoint 0 TxFIFO depth</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>GNPTXSTS</name>
    <displayName>GNPTXSTS</displayName>
    <description>OTG nonperiodic transmit FIFO/queue
    status register</description>
    <addressOffset>0x2C</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x00080200</resetValue>
    <fields>
      <field>
        <name>NPTXFSAV</name>
        <description>Nonperiodic TxFIFO space
        available</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>NPTQXSAV</name>
        <description>Nonperiodic transmit request queue space
        available</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>NPTXQTOP</name>
        <description>Top of the nonperiodic transmit request
        queue</description>
        <bitOffset>24</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>GCCFG</name>
    <displayName>GCCFG</displayName>
    <description>OTG general core configuration
    register</description>
    <addressOffset>0x38</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>PWRDWN</name>
        <description>Power down</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#ifdef __USBOTG_HS
      <field>
        <name>I2CPADEN</name>
        <description>Enable I2C bus connection for the
        external I2C PHY interface</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>VBUSASEN</name>
        <description>Enable the VBUS sensing
        device</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>VBUSBSEN</name>
        <description>Enable the VBUS sensing device</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SOFOUTEN</name>
        <description>SOF output enable</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NOVBUSSENS</name>
        <description>VBUS sensing disable
        option</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CID</name>
    <displayName>CID</displayName>
    <description>OTG core ID register</description>
    <addressOffset>0x3C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x00001200</resetValue>
    <fields>
      <field>
        <name>PRODUCT_ID</name>
        <description>Product ID field</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>HPTXFSIZ</name>
    <displayName>HPTXFSIZ</displayName>
    <description>OTG Host periodic transmit FIFO size
    register</description>
    <addressOffset>0x100</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x02000600</resetValue>
    <fields>
      <field>
        <name>PTXSA</name>
        <description>Host periodic TxFIFO start
        address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>PTXFD</name>
        <description>Host periodic TxFIFO depth</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DIEPTXF1</name>
    <displayName>DIEPTXF1</displayName>
    <description>OTG device IN endpoint transmit FIFO size
    register</description>
    <addressOffset>0x104</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x02000400</resetValue>
    <fields>
      <field>
        <name>INEPTXSA</name>
        <description>IN endpoint FIFOx transmit RAM start
        address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>INEPTXFD</name>
        <description>IN endpoint TxFIFO depth</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DIEPTXF2</name>
    <displayName>DIEPTXF2</displayName>
    <description>OTG device IN endpoint transmit FIFO size
    register</description>
    <addressOffset>0x108</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x02000400</resetValue>
    <fields>
      <field>
        <name>INEPTXSA</name>
        <description>IN endpoint FIFOx transmit RAM start
        address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>INEPTXFD</name>
        <description>IN endpoint TxFIFO depth</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DIEPTXF3</name>
    <displayName>DIEPTXF3</displayName>
    <description>OTG device IN endpoint transmit FIFO size
    register</description>
    <addressOffset>0x10C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x02000400</resetValue>
    <fields>
      <field>
        <name>INEPTXSA</name>
        <description>IN endpoint FIFOx transmit RAM start
        address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>INEPTXFD</name>
        <description>IN endpoint TxFIFO depth</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
#ifdef __USBOTG_HS
  <register>
    <name>DIEPTXF4</name>
    <displayName>DIEPTXF4</displayName>
    <description>OTG device IN endpoint transmit FIFO size
    register</description>
    <addressOffset>0x110</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x02000400</resetValue>
    <fields>
      <field>
        <name>INEPTXSA</name>
        <description>IN endpoint FIFOx transmit RAM start
        address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>INEPTXFD</name>
        <description>IN endpoint TxFIFO depth</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DIEPTXF5</name>
    <displayName>DIEPTXF5</displayName>
    <description>OTG device IN endpoint transmit FIFO size
    register</description>
    <addressOffset>0x114</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x02000400</resetValue>
    <fields>
      <field>
        <name>INEPTXSA</name>
        <description>IN endpoint FIFOx transmit RAM start
        address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>INEPTXFD</name>
        <description>IN endpoint TxFIFO depth</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DIEPTXF6</name>
    <displayName>DIEPTXF6</displayName>
    <description>OTG device IN endpoint transmit FIFO size
    register</description>
    <addressOffset>0x118</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x02000400</resetValue>
    <fields>
      <field>
        <name>INEPTXSA</name>
        <description>IN endpoint FIFOx transmit RAM start
        address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>INEPTXFD</name>
        <description>IN endpoint TxFIFO depth</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DIEPTXF7</name>
    <displayName>DIEPTXF7</displayName>
    <description>OTG device IN endpoint transmit FIFO size
    register</description>
    <addressOffset>0x11C</addressOffset>
    <size>32</size>
    <access>read-write</access>
    <resetValue>0x02000400</resetValue>
    <fields>
      <field>
        <name>INEPTXSA</name>
        <description>IN endpoint FIFOx transmit RAM start
        address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>INEPTXFD</name>
        <description>IN endpoint TxFIFO depth</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
#endif
  <register>
    <name>GRXSTSR_Peripheral</name>
    <displayName>GRXSTSR_Peripheral</displayName>
    <description>OTG Receive status debug read register
    (peripheral mode mode)</description>
    <alternateRegister>GRXSTSR_Host</alternateRegister>
    <addressOffset>0x1C</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>BCNT</name>
        <description>Byte count</description>
        <bitOffset>4</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>15</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PKTSTS</name>
        <description>Packet status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>FRMNUM</name>
        <description>Frame number</description>
        <bitOffset>21</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>GRXSTSP_Peripheral</name>
    <displayName>GRXSTSP_Peripheral</displayName>
    <description>OTG status read and pop register
    (peripheral mode)</description>
    <alternateRegister>GRXSTSP_Host</alternateRegister>
    <addressOffset>0x20</addressOffset>
    <size>32</size>
    <access>read-only</access>
    <resetValue>0x0</resetValue>
    <fields>
      <field>
        <name>EPNUM</name>
        <description>Endpoint number</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>BCNT</name>
        <description>Byte count</description>
        <bitOffset>4</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>DPID</name>
        <description>Data PID</description>
        <bitOffset>15</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PKTSTS</name>
        <description>Packet status</description>
        <bitOffset>17</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>FRMNUM</name>
        <description>Frame number</description>
        <bitOffset>21</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
</registers>
#undef __USBOTG_HS
