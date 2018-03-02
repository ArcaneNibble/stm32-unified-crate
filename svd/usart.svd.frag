<description>Universal synchronous asynchronous receiver
transmitter</description>
<groupName>USART</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>SR</name>
    <displayName>SR</displayName>
    <description>Status register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <resetValue>0x00C00000</resetValue>
    <fields>
#ifndef __USART_ASYNCHRONOUS_ONLY
      <field>
        <name>CTS</name>
        <description>CTS flag</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
#endif
      <field>
        <name>LBD</name>
        <description>LIN break detection flag</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TXE</name>
        <description>Transmit data register
        empty</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>TC</name>
        <description>Transmission complete</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RXNE</name>
        <description>Read data register not
        empty</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>IDLE</name>
        <description>IDLE line detected</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>ORE</name>
        <description>Overrun error</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>NF</name>
        <description>Noise detected flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>FE</name>
        <description>Framing error</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PE</name>
        <description>Parity error</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>DR</name>
    <displayName>DR</displayName>
    <description>Data register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DR</name>
        <description>Data value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>9</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BRR</name>
    <displayName>BRR</displayName>
    <description>Baud rate register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>DIV_Mantissa</name>
        <description>mantissa of USARTDIV</description>
        <bitOffset>4</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
      <field>
        <name>DIV_Fraction</name>
        <description>fraction of USARTDIV</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CR1</name>
    <displayName>CR1</displayName>
    <description>Control register 1</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>OVER8</name>
        <description>Oversampling mode</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>UE</name>
        <description>USART enable</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>M</name>
        <description>Word length</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WAKE</name>
        <description>Wakeup method</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PCE</name>
        <description>Parity control enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PS</name>
        <description>Parity selection</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PEIE</name>
        <description>PE interrupt enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TXEIE</name>
        <description>TXE interrupt enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIE</name>
        <description>Transmission complete interrupt
        enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RXNEIE</name>
        <description>RXNE interrupt enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDLEIE</name>
        <description>IDLE interrupt enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TE</name>
        <description>Transmitter enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RE</name>
        <description>Receiver enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RWU</name>
        <description>Receiver wakeup</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SBK</name>
        <description>Send break</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CR2</name>
    <displayName>CR2</displayName>
    <description>Control register 2</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>LINEN</name>
        <description>LIN mode enable</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STOP</name>
        <description>STOP bits</description>
        <bitOffset>12</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
#ifndef __USART_ASYNCHRONOUS_ONLY
      <field>
        <name>CLKEN</name>
        <description>Clock enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CPOL</name>
        <description>Clock polarity</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CPHA</name>
        <description>Clock phase</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LBCL</name>
        <description>Last bit clock pulse</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>LBDIE</name>
        <description>LIN break detection interrupt
        enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LBDL</name>
        <description>lin break detection length</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ADD</name>
        <description>Address of the USART node</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CR3</name>
    <displayName>CR3</displayName>
    <description>Control register 3</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>ONEBIT</name>
        <description>One sample bit method
        enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#ifndef __USART_ASYNCHRONOUS_ONLY
      <field>
        <name>CTSIE</name>
        <description>CTS interrupt enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTSE</name>
        <description>CTS enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RTSE</name>
        <description>RTS enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>DMAT</name>
        <description>DMA enable transmitter</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMAR</name>
        <description>DMA enable receiver</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#ifndef __USART_ASYNCHRONOUS_ONLY
      <field>
        <name>SCEN</name>
        <description>Smartcard mode enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NACK</name>
        <description>Smartcard NACK enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>HDSEL</name>
        <description>Half-duplex selection</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IRLP</name>
        <description>IrDA low-power</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IREN</name>
        <description>IrDA mode enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EIE</name>
        <description>Error interrupt enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
#ifndef __USART_ASYNCHRONOUS_ONLY
  <register>
    <name>GTPR</name>
    <displayName>GTPR</displayName>
    <description>Guard time and prescaler
    register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>GT</name>
        <description>Guard time value</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>PSC</name>
        <description>Prescaler value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
#endif
</registers>
# undef __USART_ASYNCHRONOUS_ONLY
