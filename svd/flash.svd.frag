<description>FLASH</description>
<groupName>FLASH</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>ACR</name>
    <displayName>ACR</displayName>
    <description>Flash access control register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LATENCY</name>
        <description>Latency</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PRFTEN</name>
        <description>Prefetch enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ICEN</name>
        <description>Instruction cache enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>DCEN</name>
        <description>Data cache enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ICRST</name>
        <description>Instruction cache reset</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>DCRST</name>
        <description>Data cache reset</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>KEYR</name>
    <displayName>KEYR</displayName>
    <description>Flash key register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>KEY</name>
        <description>FPEC key</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OPTKEYR</name>
    <displayName>OPTKEYR</displayName>
    <description>Flash option key register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>OPTKEY</name>
        <description>Option byte key</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SR</name>
    <displayName>SR</displayName>
    <description>Status register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>EOP</name>
        <description>End of operation</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>OPERR</name>
        <description>Operation error</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>WRPERR</name>
        <description>Write protection error</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PGAERR</name>
        <description>Programming alignment
        error</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PGPERR</name>
        <description>Programming parallelism
        error</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PGSERR</name>
        <description>Programming sequence error</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BSY</name>
        <description>Busy</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>CR</name>
    <displayName>CR</displayName>
    <description>Control register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x80000000</resetValue>
    <fields>
      <field>
        <name>PG</name>
        <description>Programming</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SER</name>
        <description>Sector Erase</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#if defined(STM32F427) || defined(STM32F437) || defined(STM32F429) || defined(STM32F439)
      <field>
        <name>MER</name>
        <description>Mass Erase of sectors 0 to 11</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SNB</name>
        <description>Sector number</description>
        <bitOffset>3</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>MER1</name>
        <description>Mass Erase of sectors 12 to 23</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#else
      <field>
        <name>MER</name>
        <description>Mass Erase</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SNB</name>
        <description>Sector number</description>
        <bitOffset>3</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
#endif
      <field>
        <name>PSIZE</name>
        <description>Program size</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>STRT</name>
        <description>Start</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EOPIE</name>
        <description>End of operation interrupt
        enable</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ERRIE</name>
        <description>Error interrupt enable</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LOCK</name>
        <description>Lock</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OPTCR</name>
    <displayName>OPTCR</displayName>
    <description>Flash option control register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0FFFAAED</resetValue>
    <fields>
      <field>
        <name>OPTLOCK</name>
        <description>Option lock</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OPTSTRT</name>
        <description>Option start</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BOR_LEV</name>
        <description>BOR reset Level</description>
        <bitOffset>2</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>WDG_SW</name>
        <description>WDG_SW User option bytes</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>nRST_STOP</name>
        <description>nRST_STOP User option
        bytes</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>nRST_STDBY</name>
        <description>nRST_STDBY User option
        bytes</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RDP</name>
        <description>Read protect</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>nWRP</name>
        <description>Not write protect</description>
        <bitOffset>16</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
#if defined(STM32F427) || defined(STM32F437) || defined(STM32F429) || defined(STM32F439)
  <register>
    <name>OPTCR1</name>
    <displayName>OPTCR1</displayName>
    <description>Flash option control register
    1</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0FFF0000</resetValue>
    <fields>
      <field>
        <name>nWRP</name>
        <description>Not write protect</description>
        <bitOffset>16</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
#endif
</registers>
