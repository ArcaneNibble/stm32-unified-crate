<description>Common ADC registers</description>
<groupName>ADC</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>CSR</name>
    <displayName>CSR</displayName>
    <description>ADC Common status register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>OVR3</name>
        <description>Overrun flag of ADC3</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STRT3</name>
        <description>Regular channel Start flag of ADC
        3</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JSTRT3</name>
        <description>Injected channel Start flag of ADC
        3</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JEOC3</name>
        <description>Injected channel end of conversion of
        ADC 3</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EOC3</name>
        <description>End of conversion of ADC 3</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AWD3</name>
        <description>Analog watchdog flag of ADC
        3</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVR2</name>
        <description>Overrun flag of ADC 2</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STRT2</name>
        <description>Regular channel Start flag of ADC
        2</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JSTRT2</name>
        <description>Injected channel Start flag of ADC
        2</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JEOC2</name>
        <description>Injected channel end of conversion of
        ADC 2</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EOC2</name>
        <description>End of conversion of ADC 2</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AWD2</name>
        <description>Analog watchdog flag of ADC
        2</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVR1</name>
        <description>Overrun flag of ADC 1</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STRT1</name>
        <description>Regular channel Start flag of ADC
        1</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JSTRT1</name>
        <description>Injected channel Start flag of ADC
        1</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JEOC1</name>
        <description>Injected channel end of conversion of
        ADC 1</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EOC1</name>
        <description>End of conversion of ADC 1</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AWD1</name>
        <description>Analog watchdog flag of ADC
        1</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CCR</name>
    <displayName>CCR</displayName>
    <description>ADC common control register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TSVREFE</name>
        <description>Temperature sensor and VREFINT
        enable</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>VBATE</name>
        <description>VBAT enable</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ADCPRE</name>
        <description>ADC prescaler</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DMA</name>
        <description>Direct memory access mode for multi ADC
        mode</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DDS</name>
        <description>DMA disable selection for multi-ADC
        mode</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DELAY</name>
        <description>Delay between 2 sampling
        phases</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>MULT</name>
        <description>Multi ADC mode selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CDR</name>
    <displayName>CDR</displayName>
    <description>ADC common regular data register for dual
    and triple modes</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA2</name>
        <description>2nd data item of a pair of regular
        conversions</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>DATA1</name>
        <description>1st data item of a pair of regular
        conversions</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
</registers>
