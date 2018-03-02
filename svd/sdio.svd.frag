<description>Secure digital input/output
interface</description>
<groupName>SDIO</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>POWER</name>
    <displayName>POWER</displayName>
    <description>power control register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PWRCTRL</name>
        <description>PWRCTRL</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CLKCR</name>
    <displayName>CLKCR</displayName>
    <description>SDI clock control register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>HWFC_EN</name>
        <description>HW Flow Control enable</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NEGEDGE</name>
        <description>SDIO_CK dephasing selection
        bit</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WIDBUS</name>
        <description>Wide bus mode enable bit</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>BYPASS</name>
        <description>Clock divider bypass enable
        bit</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PWRSAV</name>
        <description>Power saving configuration
        bit</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CLKEN</name>
        <description>Clock enable bit</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CLKDIV</name>
        <description>Clock divide factor</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ARG</name>
    <displayName>ARG</displayName>
    <description>argument register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CMDARG</name>
        <description>Command argument</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CMD</name>
    <displayName>CMD</displayName>
    <description>command register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CE_ATACMD</name>
        <description>CE-ATA command</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>nIEN</name>
        <description>not Interrupt Enable</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ENCMDcompl</name>
        <description>Enable CMD completion</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SDIOSuspend</name>
        <description>SD I/O suspend command</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CPSMEN</name>
        <description>Command path state machine (CPSM) Enable
        bit</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WAITPEND</name>
        <description>CPSM Waits for ends of data transfer
        (CmdPend internal signal).</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WAITINT</name>
        <description>CPSM waits for interrupt
        request</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WAITRESP</name>
        <description>Wait for response bits</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CMDINDEX</name>
        <description>Command index</description>
        <bitOffset>0</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RESPCMD</name>
    <displayName>RESPCMD</displayName>
    <description>command response register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RESPCMD</name>
        <description>Response command index</description>
        <bitOffset>0</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RESP1</name>
    <displayName>RESP1</displayName>
    <description>response 1..4 register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CARDSTATUS1</name>
        <description>see Table 132.</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RESP2</name>
    <displayName>RESP2</displayName>
    <description>response 1..4 register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CARDSTATUS2</name>
        <description>see Table 132.</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RESP3</name>
    <displayName>RESP3</displayName>
    <description>response 1..4 register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CARDSTATUS3</name>
        <description>see Table 132.</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RESP4</name>
    <displayName>RESP4</displayName>
    <description>response 1..4 register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CARDSTATUS4</name>
        <description>see Table 132.</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DTIMER</name>
    <displayName>DTIMER</displayName>
    <description>data timer register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATATIME</name>
        <description>Data timeout period</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DLEN</name>
    <displayName>DLEN</displayName>
    <description>data length register</description>
    <addressOffset>0x28</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATALENGTH</name>
        <description>Data length value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>25</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DCTRL</name>
    <displayName>DCTRL</displayName>
    <description>data control register</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SDIOEN</name>
        <description>SD I/O enable functions</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RWMOD</name>
        <description>Read wait mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RWSTOP</name>
        <description>Read wait stop</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RWSTART</name>
        <description>Read wait start</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBLOCKSIZE</name>
        <description>Data block size</description>
        <bitOffset>4</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>DMAEN</name>
        <description>DMA enable bit</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTMODE</name>
        <description>Data transfer mode selection 1: Stream
        or SDIO multibyte data transfer.</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTDIR</name>
        <description>Data transfer direction
        selection</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTEN</name>
        <description>DTEN</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DCOUNT</name>
    <displayName>DCOUNT</displayName>
    <description>data counter register</description>
    <addressOffset>0x30</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATACOUNT</name>
        <description>Data count value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>25</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>STA</name>
    <displayName>STA</displayName>
    <description>status register</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CEATAEND</name>
        <description>CE-ATA command completion signal
        received for CMD61</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SDIOIT</name>
        <description>SDIO interrupt received</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXDAVL</name>
        <description>Data available in receive
        FIFO</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXDAVL</name>
        <description>Data available in transmit
        FIFO</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXFIFOE</name>
        <description>Receive FIFO empty</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXFIFOE</name>
        <description>Transmit FIFO empty</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXFIFOF</name>
        <description>Receive FIFO full</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXFIFOF</name>
        <description>Transmit FIFO full</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXFIFOHF</name>
        <description>Receive FIFO half full: there are at
        least 8 words in the FIFO</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXFIFOHE</name>
        <description>Transmit FIFO half empty: at least 8
        words can be written into the FIFO</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXACT</name>
        <description>Data receive in progress</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXACT</name>
        <description>Data transmit in progress</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CMDACT</name>
        <description>Command transfer in
        progress</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBCKEND</name>
        <description>Data block sent/received (CRC check
        passed)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STBITERR</name>
        <description>Start bit not detected on all data
        signals in wide bus mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DATAEND</name>
        <description>Data end (data counter, SDIDCOUNT, is
        zero)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CMDSENT</name>
        <description>Command sent (no response
        required)</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CMDREND</name>
        <description>Command response received (CRC check
        passed)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXOVERR</name>
        <description>Received FIFO overrun
        error</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXUNDERR</name>
        <description>Transmit FIFO underrun
        error</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTIMEOUT</name>
        <description>Data timeout</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTIMEOUT</name>
        <description>Command response timeout</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DCRCFAIL</name>
        <description>Data block sent/received (CRC check
        failed)</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CCRCFAIL</name>
        <description>Command response received (CRC check
        failed)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ICR</name>
    <displayName>ICR</displayName>
    <description>interrupt clear register</description>
    <addressOffset>0x38</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CEATAENDC</name>
        <description>CEATAEND flag clear bit</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SDIOITC</name>
        <description>SDIOIT flag clear bit</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBCKENDC</name>
        <description>DBCKEND flag clear bit</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STBITERRC</name>
        <description>STBITERR flag clear bit</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DATAENDC</name>
        <description>DATAEND flag clear bit</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CMDSENTC</name>
        <description>CMDSENT flag clear bit</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CMDRENDC</name>
        <description>CMDREND flag clear bit</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXOVERRC</name>
        <description>RXOVERR flag clear bit</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXUNDERRC</name>
        <description>TXUNDERR flag clear bit</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTIMEOUTC</name>
        <description>DTIMEOUT flag clear bit</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTIMEOUTC</name>
        <description>CTIMEOUT flag clear bit</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DCRCFAILC</name>
        <description>DCRCFAIL flag clear bit</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CCRCFAILC</name>
        <description>CCRCFAIL flag clear bit</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MASK</name>
    <displayName>MASK</displayName>
    <description>mask register</description>
    <addressOffset>0x3C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CEATAENDIE</name>
        <description>CE-ATA command completion signal
        received interrupt enable</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SDIOITIE</name>
        <description>SDIO mode interrupt received interrupt
        enable</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXDAVLIE</name>
        <description>Data available in Rx FIFO interrupt
        enable</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXDAVLIE</name>
        <description>Data available in Tx FIFO interrupt
        enable</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXFIFOEIE</name>
        <description>Rx FIFO empty interrupt
        enable</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXFIFOEIE</name>
        <description>Tx FIFO empty interrupt
        enable</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXFIFOFIE</name>
        <description>Rx FIFO full interrupt
        enable</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXFIFOFIE</name>
        <description>Tx FIFO full interrupt
        enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXFIFOHFIE</name>
        <description>Rx FIFO half full interrupt
        enable</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXFIFOHEIE</name>
        <description>Tx FIFO half empty interrupt
        enable</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXACTIE</name>
        <description>Data receive acting interrupt
        enable</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXACTIE</name>
        <description>Data transmit acting interrupt
        enable</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CMDACTIE</name>
        <description>Command acting interrupt
        enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBCKENDIE</name>
        <description>Data block end interrupt
        enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STBITERRIE</name>
        <description>Start bit error interrupt
        enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DATAENDIE</name>
        <description>Data end interrupt enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CMDSENTIE</name>
        <description>Command sent interrupt
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CMDRENDIE</name>
        <description>Command response received interrupt
        enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXOVERRIE</name>
        <description>Rx FIFO overrun error interrupt
        enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXUNDERRIE</name>
        <description>Tx FIFO underrun error interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DTIMEOUTIE</name>
        <description>Data timeout interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTIMEOUTIE</name>
        <description>Command timeout interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DCRCFAILIE</name>
        <description>Data CRC fail interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CCRCFAILIE</name>
        <description>Command CRC fail interrupt
        enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FIFOCNT</name>
    <displayName>FIFOCNT</displayName>
    <description>FIFO counter register</description>
    <addressOffset>0x48</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FIFOCOUNT</name>
        <description>Remaining number of words to be written
        to or read from the FIFO.</description>
        <bitOffset>0</bitOffset>
        <bitWidth>24</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FIFO</name>
    <displayName>FIFO</displayName>
    <description>data FIFO register</description>
    <addressOffset>0x80</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FIFOData</name>
        <description>Receive and transmit FIFO
        data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
</registers>
