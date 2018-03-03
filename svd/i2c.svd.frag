<description>Inter-integrated circuit</description>
<groupName>I2C</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>CR1</name>
    <displayName>CR1</displayName>
    <description>Control register 1</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>SWRST</name>
        <description>Software reset</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ALERT</name>
        <description>SMBus alert</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PEC</name>
        <description>Packet error checking</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>POS</name>
        <description>Acknowledge/PEC Position (for data
        reception)</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>Acknowledge enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STOP</name>
        <description>Stop generation</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>START</name>
        <description>Start generation</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>NOSTRETCH</name>
        <description>Clock stretching disable (Slave
        mode)</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ENGC</name>
        <description>General call enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ENPEC</name>
        <description>PEC enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ENARP</name>
        <description>ARP enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SMBTYPE</name>
        <description>SMBus type</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SMBUS</name>
        <description>SMBus mode</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PE</name>
        <description>Peripheral enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CR2</name>
    <displayName>CR2</displayName>
    <description>Control register 2</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>LAST</name>
        <description>DMA last transfer</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMAEN</name>
        <description>DMA requests enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ITBUFEN</name>
        <description>Buffer interrupt enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ITEVTEN</name>
        <description>Event interrupt enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ITERREN</name>
        <description>Error interrupt enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FREQ</name>
        <description>Peripheral clock frequency</description>
        <bitOffset>0</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OAR1</name>
    <displayName>OAR1</displayName>
    <description>Own address register 1</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>ADDMODE</name>
        <description>Addressing mode (slave
        mode)</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ADD10</name>
        <description>Interface address</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ADD7</name>
        <description>Interface address</description>
        <bitOffset>1</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ADD0</name>
        <description>Interface address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OAR2</name>
    <displayName>OAR2</displayName>
    <description>Own address register 2</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>ADD2</name>
        <description>Interface address</description>
        <bitOffset>1</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>ENDUAL</name>
        <description>Dual addressing mode
        enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DR</name>
    <displayName>DR</displayName>
    <description>Data register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>DR</name>
        <description>8-bit data register</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SR1</name>
    <displayName>SR1</displayName>
    <description>Status register 1</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>SMBALERT</name>
        <description>SMBus alert</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TIMEOUT</name>
        <description>Timeout or Tlow error</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PECERR</name>
        <description>PEC Error in reception</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>OVR</name>
        <description>Overrun/Underrun</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>AF</name>
        <description>Acknowledge failure</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ARLO</name>
        <description>Arbitration lost (master
        mode)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BERR</name>
        <description>Bus error</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TxE</name>
        <description>Data register empty
        (transmitters)</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>RxNE</name>
        <description>Data register not empty
        (receivers)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>STOPF</name>
        <description>Stop detection (slave
        mode)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>ADD10</name>
        <description>10-bit header sent (Master
        mode)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>BTF</name>
        <description>Byte transfer finished</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>ADDR</name>
        <description>Address sent (master mode)/matched
        (slave mode)</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>SB</name>
        <description>Start bit (Master mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>SR2</name>
    <displayName>SR2</displayName>
    <description>Status register 2</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>PEC</name>
        <description>acket error checking
        register</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DUALF</name>
        <description>Dual flag (Slave mode)</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SMBHOST</name>
        <description>SMBus host header (Slave
        mode)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SMBDEFAULT</name>
        <description>SMBus device default address (Slave
        mode)</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GENCALL</name>
        <description>General call address (Slave
        mode)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TRA</name>
        <description>Transmitter/receiver</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BUSY</name>
        <description>Bus busy</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MSL</name>
        <description>Master/slave</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CCR</name>
    <displayName>CCR</displayName>
    <description>Clock control register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>F_S</name>
        <description>I2C master mode selection</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DUTY</name>
        <description>Fast mode duty cycle</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CCR</name>
        <description>Clock control register in Fast/Standard
        mode (Master mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TRISE</name>
    <displayName>TRISE</displayName>
    <description>TRISE register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0002</resetValue>
    <fields>
      <field>
        <name>TRISE</name>
        <description>Maximum rise time in Fast/Standard mode
        (Master mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
    </fields>
  </register>
#if defined(STM32F427)
  <register>
    <name>FLTR</name>
    <displayName>FLTR</displayName>
    <description>I2C FLTR register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>DNF</name>
        <description>Digital noise filter</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>ANOFF</name>
        <description>Analog noise filter OFF</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
#endif
</registers>
