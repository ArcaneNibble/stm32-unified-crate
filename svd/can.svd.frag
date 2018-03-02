<description>Controller area network</description>
<groupName>CAN</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>MCR</name>
    <displayName>MCR</displayName>
    <description>master control register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00010002</resetValue>
    <fields>
      <field>
        <name>DBF</name>
        <description>DBF</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RESET</name>
        <description>RESET</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TTCM</name>
        <description>TTCM</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ABOM</name>
        <description>ABOM</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AWUM</name>
        <description>AWUM</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NART</name>
        <description>NART</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RFLM</name>
        <description>RFLM</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXFP</name>
        <description>TXFP</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SLEEP</name>
        <description>SLEEP</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>INRQ</name>
        <description>INRQ</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MSR</name>
    <displayName>MSR</displayName>
    <description>master status register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000C02</resetValue>
    <fields>
      <field>
        <name>RX</name>
        <description>RX</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>SAMP</name>
        <description>SAMP</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>RXM</name>
        <description>RXM</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TXM</name>
        <description>TXM</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>SLAKI</name>
        <description>SLAKI</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>WKUI</name>
        <description>WKUI</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ERRI</name>
        <description>ERRI</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SLAK</name>
        <description>SLAK</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>INAK</name>
        <description>INAK</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>TSR</name>
    <displayName>TSR</displayName>
    <description>transmit status register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <resetValue>0x1C000000</resetValue>
    <fields>
      <field>
        <name>LOW2</name>
        <description>Lowest priority flag for mailbox
        2</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>LOW1</name>
        <description>Lowest priority flag for mailbox
        1</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>LOW0</name>
        <description>Lowest priority flag for mailbox
        0</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TME2</name>
        <description>Lowest priority flag for mailbox
        2</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TME1</name>
        <description>Lowest priority flag for mailbox
        1</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TME0</name>
        <description>Lowest priority flag for mailbox
        0</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>CODE</name>
        <description>CODE</description>
        <bitOffset>24</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>ABRQ2</name>
        <description>ABRQ2</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TERR2</name>
        <description>TERR2</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ALST2</name>
        <description>ALST2</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXOK2</name>
        <description>TXOK2</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RQCP2</name>
        <description>RQCP2</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ABRQ1</name>
        <description>ABRQ1</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TERR1</name>
        <description>TERR1</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ALST1</name>
        <description>ALST1</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXOK1</name>
        <description>TXOK1</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RQCP1</name>
        <description>RQCP1</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ABRQ0</name>
        <description>ABRQ0</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TERR0</name>
        <description>TERR0</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ALST0</name>
        <description>ALST0</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXOK0</name>
        <description>TXOK0</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RQCP0</name>
        <description>RQCP0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>RF0R</name>
    <displayName>RF0R</displayName>
    <description>receive FIFO 0 register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RFOM0</name>
        <description>RFOM0</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FOVR0</name>
        <description>FOVR0</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FULL0</name>
        <description>FULL0</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FMP0</name>
        <description>FMP0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>RF1R</name>
    <displayName>RF1R</displayName>
    <description>receive FIFO 1 register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RFOM1</name>
        <description>RFOM1</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FOVR1</name>
        <description>FOVR1</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FULL1</name>
        <description>FULL1</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FMP1</name>
        <description>FMP1</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>IER</name>
    <displayName>IER</displayName>
    <description>interrupt enable register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SLKIE</name>
        <description>SLKIE</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WKUIE</name>
        <description>WKUIE</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ERRIE</name>
        <description>ERRIE</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LECIE</name>
        <description>LECIE</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BOFIE</name>
        <description>BOFIE</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EPVIE</name>
        <description>EPVIE</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EWGIE</name>
        <description>EWGIE</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FOVIE1</name>
        <description>FOVIE1</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFIE1</name>
        <description>FFIE1</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FMPIE1</name>
        <description>FMPIE1</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FOVIE0</name>
        <description>FOVIE0</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFIE0</name>
        <description>FFIE0</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FMPIE0</name>
        <description>FMPIE0</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TMEIE</name>
        <description>TMEIE</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ESR</name>
    <displayName>ESR</displayName>
    <description>interrupt enable register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>REC</name>
        <description>REC</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TEC</name>
        <description>TEC</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>LEC</name>
        <description>LEC</description>
        <bitOffset>4</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BOFF</name>
        <description>BOFF</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EPVF</name>
        <description>EPVF</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EWGF</name>
        <description>EWGF</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>BTR</name>
    <displayName>BTR</displayName>
    <description>bit timing register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SILM</name>
        <description>SILM</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LBKM</name>
        <description>LBKM</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SJW</name>
        <description>SJW</description>
        <bitOffset>24</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>TS2</name>
        <description>TS2</description>
        <bitOffset>20</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>TS1</name>
        <description>TS1</description>
        <bitOffset>16</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>BRP</name>
        <description>BRP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>10</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TI0R</name>
    <displayName>TI0R</displayName>
    <description>TX mailbox identifier register</description>
    <addressOffset>0x180</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>STID</name>
        <description>STID</description>
        <bitOffset>21</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EXID</name>
        <description>EXID</description>
        <bitOffset>3</bitOffset>
        <bitWidth>18</bitWidth>
      </field>
      <field>
        <name>IDE</name>
        <description>IDE</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RTR</name>
        <description>RTR</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXRQ</name>
        <description>TXRQ</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TDT0R</name>
    <displayName>TDT0R</displayName>
    <description>mailbox data length control and time stamp
    register</description>
    <addressOffset>0x184</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TIME</name>
        <description>TIME</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>TGT</name>
        <description>TGT</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DLC</name>
        <description>DLC</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TDL0R</name>
    <displayName>TDL0R</displayName>
    <description>mailbox data low register</description>
    <addressOffset>0x188</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA3</name>
        <description>DATA3</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA2</name>
        <description>DATA2</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA1</name>
        <description>DATA1</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA0</name>
        <description>DATA0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TDH0R</name>
    <displayName>TDH0R</displayName>
    <description>mailbox data high register</description>
    <addressOffset>0x18C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA7</name>
        <description>DATA7</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA6</name>
        <description>DATA6</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA5</name>
        <description>DATA5</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA4</name>
        <description>DATA4</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TI1R</name>
    <displayName>TI1R</displayName>
    <description>mailbox identifier register</description>
    <addressOffset>0x190</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>STID</name>
        <description>STID</description>
        <bitOffset>21</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EXID</name>
        <description>EXID</description>
        <bitOffset>3</bitOffset>
        <bitWidth>18</bitWidth>
      </field>
      <field>
        <name>IDE</name>
        <description>IDE</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RTR</name>
        <description>RTR</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXRQ</name>
        <description>TXRQ</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TDT1R</name>
    <displayName>TDT1R</displayName>
    <description>mailbox data length control and time stamp
    register</description>
    <addressOffset>0x194</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TIME</name>
        <description>TIME</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>TGT</name>
        <description>TGT</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DLC</name>
        <description>DLC</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TDL1R</name>
    <displayName>TDL1R</displayName>
    <description>mailbox data low register</description>
    <addressOffset>0x198</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA3</name>
        <description>DATA3</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA2</name>
        <description>DATA2</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA1</name>
        <description>DATA1</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA0</name>
        <description>DATA0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TDH1R</name>
    <displayName>TDH1R</displayName>
    <description>mailbox data high register</description>
    <addressOffset>0x19C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA7</name>
        <description>DATA7</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA6</name>
        <description>DATA6</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA5</name>
        <description>DATA5</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA4</name>
        <description>DATA4</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TI2R</name>
    <displayName>TI2R</displayName>
    <description>mailbox identifier register</description>
    <addressOffset>0x1A0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>STID</name>
        <description>STID</description>
        <bitOffset>21</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EXID</name>
        <description>EXID</description>
        <bitOffset>3</bitOffset>
        <bitWidth>18</bitWidth>
      </field>
      <field>
        <name>IDE</name>
        <description>IDE</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RTR</name>
        <description>RTR</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXRQ</name>
        <description>TXRQ</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TDT2R</name>
    <displayName>TDT2R</displayName>
    <description>mailbox data length control and time stamp
    register</description>
    <addressOffset>0x1A4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TIME</name>
        <description>TIME</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>TGT</name>
        <description>TGT</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DLC</name>
        <description>DLC</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TDL2R</name>
    <displayName>TDL2R</displayName>
    <description>mailbox data low register</description>
    <addressOffset>0x1A8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA3</name>
        <description>DATA3</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA2</name>
        <description>DATA2</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA1</name>
        <description>DATA1</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA0</name>
        <description>DATA0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TDH2R</name>
    <displayName>TDH2R</displayName>
    <description>mailbox data high register</description>
    <addressOffset>0x1AC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA7</name>
        <description>DATA7</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA6</name>
        <description>DATA6</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA5</name>
        <description>DATA5</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA4</name>
        <description>DATA4</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RI0R</name>
    <displayName>RI0R</displayName>
    <description>receive FIFO mailbox identifier
    register</description>
    <addressOffset>0x1B0</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>STID</name>
        <description>STID</description>
        <bitOffset>21</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EXID</name>
        <description>EXID</description>
        <bitOffset>3</bitOffset>
        <bitWidth>18</bitWidth>
      </field>
      <field>
        <name>IDE</name>
        <description>IDE</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RTR</name>
        <description>RTR</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RDT0R</name>
    <displayName>RDT0R</displayName>
    <description>mailbox data high register</description>
    <addressOffset>0x1B4</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TIME</name>
        <description>TIME</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>FMI</name>
        <description>FMI</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DLC</name>
        <description>DLC</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RDL0R</name>
    <displayName>RDL0R</displayName>
    <description>mailbox data high register</description>
    <addressOffset>0x1B8</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA3</name>
        <description>DATA3</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA2</name>
        <description>DATA2</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA1</name>
        <description>DATA1</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA0</name>
        <description>DATA0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RDH0R</name>
    <displayName>RDH0R</displayName>
    <description>receive FIFO mailbox data high
    register</description>
    <addressOffset>0x1BC</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA7</name>
        <description>DATA7</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA6</name>
        <description>DATA6</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA5</name>
        <description>DATA5</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA4</name>
        <description>DATA4</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RI1R</name>
    <displayName>RI1R</displayName>
    <description>mailbox data high register</description>
    <addressOffset>0x1C0</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>STID</name>
        <description>STID</description>
        <bitOffset>21</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>EXID</name>
        <description>EXID</description>
        <bitOffset>3</bitOffset>
        <bitWidth>18</bitWidth>
      </field>
      <field>
        <name>IDE</name>
        <description>IDE</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RTR</name>
        <description>RTR</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RDT1R</name>
    <displayName>RDT1R</displayName>
    <description>mailbox data high register</description>
    <addressOffset>0x1C4</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TIME</name>
        <description>TIME</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>FMI</name>
        <description>FMI</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DLC</name>
        <description>DLC</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RDL1R</name>
    <displayName>RDL1R</displayName>
    <description>mailbox data high register</description>
    <addressOffset>0x1C8</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA3</name>
        <description>DATA3</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA2</name>
        <description>DATA2</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA1</name>
        <description>DATA1</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA0</name>
        <description>DATA0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RDH1R</name>
    <displayName>RDH1R</displayName>
    <description>mailbox data high register</description>
    <addressOffset>0x1CC</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA7</name>
        <description>DATA7</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA6</name>
        <description>DATA6</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA5</name>
        <description>DATA5</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DATA4</name>
        <description>DATA4</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FMR</name>
    <displayName>FMR</displayName>
    <description>filter master register</description>
    <addressOffset>0x200</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x2A1C0E01</resetValue>
    <fields>
      <field>
        <name>CAN2SB</name>
        <description>CAN2SB</description>
        <bitOffset>8</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
      <field>
        <name>FINIT</name>
        <description>FINIT</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FM1R</name>
    <displayName>FM1R</displayName>
    <description>filter mode register</description>
    <addressOffset>0x204</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FBM0</name>
        <description>Filter mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM1</name>
        <description>Filter mode</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM2</name>
        <description>Filter mode</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM3</name>
        <description>Filter mode</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM4</name>
        <description>Filter mode</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM5</name>
        <description>Filter mode</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM6</name>
        <description>Filter mode</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM7</name>
        <description>Filter mode</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM8</name>
        <description>Filter mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM9</name>
        <description>Filter mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM10</name>
        <description>Filter mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM11</name>
        <description>Filter mode</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM12</name>
        <description>Filter mode</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM13</name>
        <description>Filter mode</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM14</name>
        <description>Filter mode</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM15</name>
        <description>Filter mode</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM16</name>
        <description>Filter mode</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM17</name>
        <description>Filter mode</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM18</name>
        <description>Filter mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM19</name>
        <description>Filter mode</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM20</name>
        <description>Filter mode</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM21</name>
        <description>Filter mode</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM22</name>
        <description>Filter mode</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM23</name>
        <description>Filter mode</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM24</name>
        <description>Filter mode</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM25</name>
        <description>Filter mode</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM26</name>
        <description>Filter mode</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FBM27</name>
        <description>Filter mode</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FS1R</name>
    <displayName>FS1R</displayName>
    <description>filter scale register</description>
    <addressOffset>0x20C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FSC0</name>
        <description>Filter scale configuration</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC1</name>
        <description>Filter scale configuration</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC2</name>
        <description>Filter scale configuration</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC3</name>
        <description>Filter scale configuration</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC4</name>
        <description>Filter scale configuration</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC5</name>
        <description>Filter scale configuration</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC6</name>
        <description>Filter scale configuration</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC7</name>
        <description>Filter scale configuration</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC8</name>
        <description>Filter scale configuration</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC9</name>
        <description>Filter scale configuration</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC10</name>
        <description>Filter scale configuration</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC11</name>
        <description>Filter scale configuration</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC12</name>
        <description>Filter scale configuration</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC13</name>
        <description>Filter scale configuration</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC14</name>
        <description>Filter scale configuration</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC15</name>
        <description>Filter scale configuration</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC16</name>
        <description>Filter scale configuration</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC17</name>
        <description>Filter scale configuration</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC18</name>
        <description>Filter scale configuration</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC19</name>
        <description>Filter scale configuration</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC20</name>
        <description>Filter scale configuration</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC21</name>
        <description>Filter scale configuration</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC22</name>
        <description>Filter scale configuration</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC23</name>
        <description>Filter scale configuration</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC24</name>
        <description>Filter scale configuration</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC25</name>
        <description>Filter scale configuration</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC26</name>
        <description>Filter scale configuration</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSC27</name>
        <description>Filter scale configuration</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FFA1R</name>
    <displayName>FFA1R</displayName>
    <description>filter FIFO assignment
    register</description>
    <addressOffset>0x214</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FFA0</name>
        <description>Filter FIFO assignment for filter
        0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA1</name>
        <description>Filter FIFO assignment for filter
        1</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA2</name>
        <description>Filter FIFO assignment for filter
        2</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA3</name>
        <description>Filter FIFO assignment for filter
        3</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA4</name>
        <description>Filter FIFO assignment for filter
        4</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA5</name>
        <description>Filter FIFO assignment for filter
        5</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA6</name>
        <description>Filter FIFO assignment for filter
        6</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA7</name>
        <description>Filter FIFO assignment for filter
        7</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA8</name>
        <description>Filter FIFO assignment for filter
        8</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA9</name>
        <description>Filter FIFO assignment for filter
        9</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA10</name>
        <description>Filter FIFO assignment for filter
        10</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA11</name>
        <description>Filter FIFO assignment for filter
        11</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA12</name>
        <description>Filter FIFO assignment for filter
        12</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA13</name>
        <description>Filter FIFO assignment for filter
        13</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA14</name>
        <description>Filter FIFO assignment for filter
        14</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA15</name>
        <description>Filter FIFO assignment for filter
        15</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA16</name>
        <description>Filter FIFO assignment for filter
        16</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA17</name>
        <description>Filter FIFO assignment for filter
        17</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA18</name>
        <description>Filter FIFO assignment for filter
        18</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA19</name>
        <description>Filter FIFO assignment for filter
        19</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA20</name>
        <description>Filter FIFO assignment for filter
        20</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA21</name>
        <description>Filter FIFO assignment for filter
        21</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA22</name>
        <description>Filter FIFO assignment for filter
        22</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA23</name>
        <description>Filter FIFO assignment for filter
        23</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA24</name>
        <description>Filter FIFO assignment for filter
        24</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA25</name>
        <description>Filter FIFO assignment for filter
        25</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA26</name>
        <description>Filter FIFO assignment for filter
        26</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFA27</name>
        <description>Filter FIFO assignment for filter
        27</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FA1R</name>
    <displayName>FA1R</displayName>
    <description>filter activation register</description>
    <addressOffset>0x21C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FACT0</name>
        <description>Filter active</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT1</name>
        <description>Filter active</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT2</name>
        <description>Filter active</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT3</name>
        <description>Filter active</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT4</name>
        <description>Filter active</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT5</name>
        <description>Filter active</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT6</name>
        <description>Filter active</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT7</name>
        <description>Filter active</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT8</name>
        <description>Filter active</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT9</name>
        <description>Filter active</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT10</name>
        <description>Filter active</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT11</name>
        <description>Filter active</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT12</name>
        <description>Filter active</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT13</name>
        <description>Filter active</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT14</name>
        <description>Filter active</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT15</name>
        <description>Filter active</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT16</name>
        <description>Filter active</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT17</name>
        <description>Filter active</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT18</name>
        <description>Filter active</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT19</name>
        <description>Filter active</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT20</name>
        <description>Filter active</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT21</name>
        <description>Filter active</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT22</name>
        <description>Filter active</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT23</name>
        <description>Filter active</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT24</name>
        <description>Filter active</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT25</name>
        <description>Filter active</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT26</name>
        <description>Filter active</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FACT27</name>
        <description>Filter active</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F0R1</name>
    <displayName>F0R1</displayName>
    <description>Filter bank 0 register 1</description>
    <addressOffset>0x240</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F0R2</name>
    <displayName>F0R2</displayName>
    <description>Filter bank 0 register 2</description>
    <addressOffset>0x244</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F1R1</name>
    <displayName>F1R1</displayName>
    <description>Filter bank 1 register 1</description>
    <addressOffset>0x248</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F1R2</name>
    <displayName>F1R2</displayName>
    <description>Filter bank 1 register 2</description>
    <addressOffset>0x24C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F2R1</name>
    <displayName>F2R1</displayName>
    <description>Filter bank 2 register 1</description>
    <addressOffset>0x250</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F2R2</name>
    <displayName>F2R2</displayName>
    <description>Filter bank 2 register 2</description>
    <addressOffset>0x254</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F3R1</name>
    <displayName>F3R1</displayName>
    <description>Filter bank 3 register 1</description>
    <addressOffset>0x258</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F3R2</name>
    <displayName>F3R2</displayName>
    <description>Filter bank 3 register 2</description>
    <addressOffset>0x25C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F4R1</name>
    <displayName>F4R1</displayName>
    <description>Filter bank 4 register 1</description>
    <addressOffset>0x260</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F4R2</name>
    <displayName>F4R2</displayName>
    <description>Filter bank 4 register 2</description>
    <addressOffset>0x264</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F5R1</name>
    <displayName>F5R1</displayName>
    <description>Filter bank 5 register 1</description>
    <addressOffset>0x268</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F5R2</name>
    <displayName>F5R2</displayName>
    <description>Filter bank 5 register 2</description>
    <addressOffset>0x26C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F6R1</name>
    <displayName>F6R1</displayName>
    <description>Filter bank 6 register 1</description>
    <addressOffset>0x270</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F6R2</name>
    <displayName>F6R2</displayName>
    <description>Filter bank 6 register 2</description>
    <addressOffset>0x274</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  
  <register>
    <name>F7R1</name>
    <displayName>F7R1</displayName>
    <description>Filter bank 7 register 1</description>
    <addressOffset>0x278</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F7R2</name>
    <displayName>F7R2</displayName>
    <description>Filter bank 7 register 2</description>
    <addressOffset>0x27C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F8R1</name>
    <displayName>F8R1</displayName>
    <description>Filter bank 8 register 1</description>
    <addressOffset>0x280</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F8R2</name>
    <displayName>F8R2</displayName>
    <description>Filter bank 8 register 2</description>
    <addressOffset>0x284</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F9R1</name>
    <displayName>F9R1</displayName>
    <description>Filter bank 9 register 1</description>
    <addressOffset>0x288</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F9R2</name>
    <displayName>F9R2</displayName>
    <description>Filter bank 9 register 2</description>
    <addressOffset>0x28C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F10R1</name>
    <displayName>F10R1</displayName>
    <description>Filter bank 10 register 1</description>
    <addressOffset>0x290</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F10R2</name>
    <displayName>F10R2</displayName>
    <description>Filter bank 10 register 2</description>
    <addressOffset>0x294</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F11R1</name>
    <displayName>F11R1</displayName>
    <description>Filter bank 11 register 1</description>
    <addressOffset>0x298</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F11R2</name>
    <displayName>F11R2</displayName>
    <description>Filter bank 11 register 2</description>
    <addressOffset>0x29C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F12R1</name>
    <displayName>F12R1</displayName>
    <description>Filter bank 4 register 1</description>
    <addressOffset>0x2A0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F12R2</name>
    <displayName>F12R2</displayName>
    <description>Filter bank 12 register 2</description>
    <addressOffset>0x2A4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F13R1</name>
    <displayName>F13R1</displayName>
    <description>Filter bank 13 register 1</description>
    <addressOffset>0x2A8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F13R2</name>
    <displayName>F13R2</displayName>
    <description>Filter bank 13 register 2</description>
    <addressOffset>0x2AC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
          <register>
    <name>F14R1</name>
    <displayName>F14R1</displayName>
    <description>Filter bank 14 register 1</description>
    <addressOffset>0x2B0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F14R2</name>
    <displayName>F14R2</displayName>
    <description>Filter bank 14 register 2</description>
    <addressOffset>0x2B4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F15R1</name>
    <displayName>F15R1</displayName>
    <description>Filter bank 15 register 1</description>
    <addressOffset>0x2B8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F15R2</name>
    <displayName>F15R2</displayName>
    <description>Filter bank 15 register 2</description>
    <addressOffset>0x2BC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F16R1</name>
    <displayName>F16R1</displayName>
    <description>Filter bank 16 register 1</description>
    <addressOffset>0x2C0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F16R2</name>
    <displayName>F16R2</displayName>
    <description>Filter bank 16 register 2</description>
    <addressOffset>0x2C4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
          <register>
    <name>F17R1</name>
    <displayName>F17R1</displayName>
    <description>Filter bank 17 register 1</description>
    <addressOffset>0x2C8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F17R2</name>
    <displayName>F17R2</displayName>
    <description>Filter bank 17 register 2</description>
    <addressOffset>0x2CC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
          <register>
    <name>F18R1</name>
    <displayName>F18R1</displayName>
    <description>Filter bank 18 register 1</description>
    <addressOffset>0x2D0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F18R2</name>
    <displayName>F18R2</displayName>
    <description>Filter bank 18 register 2</description>
    <addressOffset>0x2D4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F19R1</name>
    <displayName>F19R1</displayName>
    <description>Filter bank 19 register 1</description>
    <addressOffset>0x2D8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F19R2</name>
    <displayName>F19R2</displayName>
    <description>Filter bank 19 register 2</description>
    <addressOffset>0x2DC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F20R1</name>
    <displayName>F20R1</displayName>
    <description>Filter bank 20 register 1</description>
    <addressOffset>0x2E0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F20R2</name>
    <displayName>F20R2</displayName>
    <description>Filter bank 20 register 2</description>
    <addressOffset>0x2E4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F21R1</name>
    <displayName>F21R1</displayName>
    <description>Filter bank 21 register 1</description>
    <addressOffset>0x2E8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F21R2</name>
    <displayName>F21R2</displayName>
    <description>Filter bank 21 register 2</description>
    <addressOffset>0x2EC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F22R1</name>
    <displayName>F22R1</displayName>
    <description>Filter bank 22 register 1</description>
    <addressOffset>0x2F0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F22R2</name>
    <displayName>F22R2</displayName>
    <description>Filter bank 22 register 2</description>
    <addressOffset>0x2F4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F23R1</name>
    <displayName>F23R1</displayName>
    <description>Filter bank 23 register 1</description>
    <addressOffset>0x2F8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F23R2</name>
    <displayName>F23R2</displayName>
    <description>Filter bank 23 register 2</description>
    <addressOffset>0x2FC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
          <register>
    <name>F24R1</name>
    <displayName>F24R1</displayName>
    <description>Filter bank 24 register 1</description>
    <addressOffset>0x300</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F24R2</name>
    <displayName>F24R2</displayName>
    <description>Filter bank 24 register 2</description>
    <addressOffset>0x304</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F25R1</name>
    <displayName>F25R1</displayName>
    <description>Filter bank 25 register 1</description>
    <addressOffset>0x308</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F25R2</name>
    <displayName>F25R2</displayName>
    <description>Filter bank 25 register 2</description>
    <addressOffset>0x30C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F26R1</name>
    <displayName>F26R1</displayName>
    <description>Filter bank 26 register 1</description>
    <addressOffset>0x310</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F26R2</name>
    <displayName>F26R2</displayName>
    <description>Filter bank 26 register 2</description>
    <addressOffset>0x314</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
    <register>
    <name>F27R1</name>
    <displayName>F27R1</displayName>
    <description>Filter bank 27 register 1</description>
    <addressOffset>0x318</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>F27R2</name>
    <displayName>F27R2</displayName>
    <description>Filter bank 27 register 2</description>
    <addressOffset>0x31C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FB0</name>
        <description>Filter bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB1</name>
        <description>Filter bits</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB2</name>
        <description>Filter bits</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB3</name>
        <description>Filter bits</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB4</name>
        <description>Filter bits</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB5</name>
        <description>Filter bits</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB6</name>
        <description>Filter bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB7</name>
        <description>Filter bits</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB8</name>
        <description>Filter bits</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB9</name>
        <description>Filter bits</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB10</name>
        <description>Filter bits</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB11</name>
        <description>Filter bits</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB12</name>
        <description>Filter bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB13</name>
        <description>Filter bits</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB14</name>
        <description>Filter bits</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB15</name>
        <description>Filter bits</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB16</name>
        <description>Filter bits</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB17</name>
        <description>Filter bits</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB18</name>
        <description>Filter bits</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB19</name>
        <description>Filter bits</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB20</name>
        <description>Filter bits</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB21</name>
        <description>Filter bits</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB22</name>
        <description>Filter bits</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB23</name>
        <description>Filter bits</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB24</name>
        <description>Filter bits</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB25</name>
        <description>Filter bits</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB26</name>
        <description>Filter bits</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB27</name>
        <description>Filter bits</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB28</name>
        <description>Filter bits</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB29</name>
        <description>Filter bits</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB30</name>
        <description>Filter bits</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FB31</name>
        <description>Filter bits</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
</registers>
