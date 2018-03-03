<description>System configuration controller</description>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>MEMRM</name>
    <displayName>MEMRM</displayName>
    <description>memory remap register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MEM_MODE</name>
        <description>MEM_MODE</description>
        <bitOffset>0</bitOffset>
#ifdef __HAVE_FMC
        <bitWidth>3</bitWidth>
#else
        <bitWidth>2</bitWidth>
#endif
      </field>
#if defined(STM32F427) || defined(STM32F437) || defined(STM32F429) || defined(STM32F439)
      <field>
        <name>FB_MODE</name>
        <description>Flash bank mode selection</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWP_FMC</name>
        <description>FMC memory mapping swap</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
#endif
    </fields>
  </register>
  <register>
    <name>PMC</name>
    <displayName>PMC</displayName>
    <description>peripheral mode configuration
    register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
#ifdef __HAVE_ETHERNET
      <field>
        <name>MII_RMII_SEL</name>
        <description>Ethernet PHY interface
        selection</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if defined(STM32F427) || defined(STM32F437) || defined(STM32F429) || defined(STM32F439)
      <field>
        <name>ADC1DC2</name>
        <description>ADC1DC2</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ADC2DC2</name>
        <description>ADC2DC2</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ADC3DC2</name>
        <description>ADC3DC2</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
    </fields>
  </register>
  <register>
    <name>EXTICR1</name>
    <displayName>EXTICR1</displayName>
    <description>external interrupt configuration register
    1</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>EXTI3</name>
        <description>EXTI x configuration (x = 0 to
        3)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI2</name>
        <description>EXTI x configuration (x = 0 to
        3)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI1</name>
        <description>EXTI x configuration (x = 0 to
        3)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI0</name>
        <description>EXTI x configuration (x = 0 to
        3)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>EXTICR2</name>
    <displayName>EXTICR2</displayName>
    <description>external interrupt configuration register
    2</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>EXTI7</name>
        <description>EXTI x configuration (x = 4 to
        7)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI6</name>
        <description>EXTI x configuration (x = 4 to
        7)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI5</name>
        <description>EXTI x configuration (x = 4 to
        7)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI4</name>
        <description>EXTI x configuration (x = 4 to
        7)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>EXTICR3</name>
    <displayName>EXTICR3</displayName>
    <description>external interrupt configuration register
    3</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>EXTI11</name>
        <description>EXTI x configuration (x = 8 to
        11)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI10</name>
        <description>EXTI10</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI9</name>
        <description>EXTI x configuration (x = 8 to
        11)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI8</name>
        <description>EXTI x configuration (x = 8 to
        11)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>EXTICR4</name>
    <displayName>EXTICR4</displayName>
    <description>external interrupt configuration register
    4</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>EXTI15</name>
        <description>EXTI x configuration (x = 12 to
        15)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI14</name>
        <description>EXTI x configuration (x = 12 to
        15)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI13</name>
        <description>EXTI x configuration (x = 12 to
        15)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>EXTI12</name>
        <description>EXTI x configuration (x = 12 to
        15)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CMPCR</name>
    <displayName>CMPCR</displayName>
    <description>Compensation cell control
    register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>READY</name>
        <description>READY</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CMP_PD</name>
        <description>Compensation cell
        power-down</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
</registers>
