<description>Serial peripheral interface</description>
<groupName>SPI</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>CR1</name>
    <displayName>CR1</displayName>
    <description>control register 1</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>BIDIMODE</name>
        <description>Bidirectional data mode
        enable</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BIDIOE</name>
        <description>Output enable in bidirectional
        mode</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CRCEN</name>
        <description>Hardware CRC calculation
        enable</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CRCNEXT</name>
        <description>CRC transfer next</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DFF</name>
        <description>Data frame format</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXONLY</name>
        <description>Receive only</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SSM</name>
        <description>Software slave management</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SSI</name>
        <description>Internal slave select</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSBFIRST</name>
        <description>Frame format</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPE</name>
        <description>SPI enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BR</name>
        <description>Baud rate control</description>
        <bitOffset>3</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MSTR</name>
        <description>Master selection</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CPOL</name>
        <description>Clock polarity</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CPHA</name>
        <description>Clock phase</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CR2</name>
    <displayName>CR2</displayName>
    <description>control register 2</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>TXEIE</name>
        <description>Tx buffer empty interrupt
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXNEIE</name>
        <description>RX buffer not empty interrupt
        enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ERRIE</name>
        <description>Error interrupt enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRF</name>
        <description>Frame format</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SSOE</name>
        <description>SS output enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXDMAEN</name>
        <description>Tx buffer DMA enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXDMAEN</name>
        <description>Rx buffer DMA enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SR</name>
    <displayName>SR</displayName>
    <description>status register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <resetValue>0x0002</resetValue>
    <fields>
      <field>
        <name>TIFRFE</name>
        <description>TI frame format error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>BSY</name>
        <description>Busy flag</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>OVR</name>
        <description>Overrun flag</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>MODF</name>
        <description>Mode fault</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>CRCERR</name>
        <description>CRC error flag</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>UDR</name>
        <description>Underrun flag</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>CHSIDE</name>
        <description>Channel side</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TXE</name>
        <description>Transmit buffer empty</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>RXNE</name>
        <description>Receive buffer not empty</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>DR</name>
    <displayName>DR</displayName>
    <description>data register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>DR</name>
        <description>Data register</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CRCPR</name>
    <displayName>CRCPR</displayName>
    <description>CRC polynomial register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0007</resetValue>
    <fields>
      <field>
        <name>CRCPOLY</name>
        <description>CRC polynomial register</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RXCRCR</name>
    <displayName>RXCRCR</displayName>
    <description>RX CRC register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>RxCRC</name>
        <description>Rx CRC register</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TXCRCR</name>
    <displayName>TXCRCR</displayName>
    <description>TX CRC register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>TxCRC</name>
        <description>Tx CRC register</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>I2SCFGR</name>
    <displayName>I2SCFGR</displayName>
    <description>I2S configuration register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>I2SMOD</name>
        <description>I2S mode selection</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>I2SE</name>
        <description>I2S Enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>I2SCFG</name>
        <description>I2S configuration mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PCMSYNC</name>
        <description>PCM frame synchronization</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>I2SSTD</name>
        <description>I2S standard selection</description>
        <bitOffset>4</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CKPOL</name>
        <description>Steady state clock
        polarity</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DATLEN</name>
        <description>Data length to be
        transferred</description>
        <bitOffset>1</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CHLEN</name>
        <description>Channel length (number of bits per audio
        channel)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>I2SPR</name>
    <displayName>I2SPR</displayName>
    <description>I2S prescaler register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>00000010</resetValue>
    <fields>
      <field>
        <name>MCKOE</name>
        <description>Master clock output enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODD</name>
        <description>Odd factor for the
        prescaler</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>I2SDIV</name>
        <description>I2S Linear prescaler</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
</registers>
