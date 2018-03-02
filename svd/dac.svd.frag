<description>Digital-to-analog converter</description>
<groupName>DAC</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>CR</name>
    <displayName>CR</displayName>
    <description>control register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DMAUDRIE2</name>
        <description>DAC channel2 DMA underrun interrupt
        enable</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMAEN2</name>
        <description>DAC channel2 DMA enable</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MAMP2</name>
        <description>DAC channel2 mask/amplitude
        selector</description>
        <bitOffset>24</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>WAVE2</name>
        <description>DAC channel2 noise/triangle wave
        generation enable</description>
        <bitOffset>22</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>TSEL2</name>
        <description>DAC channel2 trigger
        selection</description>
        <bitOffset>19</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>TEN2</name>
        <description>DAC channel2 trigger
        enable</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BOFF2</name>
        <description>DAC channel2 output buffer
        disable</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EN2</name>
        <description>DAC channel2 enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMAUDRIE1</name>
        <description>DAC channel1 DMA Underrun Interrupt
        enable</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMAEN1</name>
        <description>DAC channel1 DMA enable</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MAMP1</name>
        <description>DAC channel1 mask/amplitude
        selector</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>WAVE1</name>
        <description>DAC channel1 noise/triangle wave
        generation enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>TSEL1</name>
        <description>DAC channel1 trigger
        selection</description>
        <bitOffset>3</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>TEN1</name>
        <description>DAC channel1 trigger
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BOFF1</name>
        <description>DAC channel1 output buffer
        disable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EN1</name>
        <description>DAC channel1 enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SWTRIGR</name>
    <displayName>SWTRIGR</displayName>
    <description>software trigger register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SWTRIG2</name>
        <description>DAC channel2 software
        trigger</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWTRIG1</name>
        <description>DAC channel1 software
        trigger</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DHR12R1</name>
    <displayName>DHR12R1</displayName>
    <description>channel1 12-bit right-aligned data holding
    register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC1DHR</name>
        <description>DAC channel1 12-bit right-aligned
        data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DHR12L1</name>
    <displayName>DHR12L1</displayName>
    <description>channel1 12-bit left aligned data holding
    register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC1DHR</name>
        <description>DAC channel1 12-bit left-aligned
        data</description>
        <bitOffset>4</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DHR8R1</name>
    <displayName>DHR8R1</displayName>
    <description>channel1 8-bit right aligned data holding
    register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC1DHR</name>
        <description>DAC channel1 8-bit right-aligned
        data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DHR12R2</name>
    <displayName>DHR12R2</displayName>
    <description>channel2 12-bit right aligned data holding
    register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC2DHR</name>
        <description>DAC channel2 12-bit right-aligned
        data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DHR12L2</name>
    <displayName>DHR12L2</displayName>
    <description>channel2 12-bit left aligned data holding
    register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC2DHR</name>
        <description>DAC channel2 12-bit left-aligned
        data</description>
        <bitOffset>4</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DHR8R2</name>
    <displayName>DHR8R2</displayName>
    <description>channel2 8-bit right-aligned data holding
    register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC2DHR</name>
        <description>DAC channel2 8-bit right-aligned
        data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DHR12RD</name>
    <displayName>DHR12RD</displayName>
    <description>Dual DAC 12-bit right-aligned data holding
    register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC2DHR</name>
        <description>DAC channel2 12-bit right-aligned
        data</description>
        <bitOffset>16</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
      <field>
        <name>DACC1DHR</name>
        <description>DAC channel1 12-bit right-aligned
        data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DHR12LD</name>
    <displayName>DHR12LD</displayName>
    <description>DUAL DAC 12-bit left aligned data holding
    register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC2DHR</name>
        <description>DAC channel2 12-bit left-aligned
        data</description>
        <bitOffset>20</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
      <field>
        <name>DACC1DHR</name>
        <description>DAC channel1 12-bit left-aligned
        data</description>
        <bitOffset>4</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DHR8RD</name>
    <displayName>DHR8RD</displayName>
    <description>DUAL DAC 8-bit right aligned data holding
    register</description>
    <addressOffset>0x28</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC2DHR</name>
        <description>DAC channel2 8-bit right-aligned
        data</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DACC1DHR</name>
        <description>DAC channel1 8-bit right-aligned
        data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DOR1</name>
    <displayName>DOR1</displayName>
    <description>channel1 data output register</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC1DOR</name>
        <description>DAC channel1 data output</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DOR2</name>
    <displayName>DOR2</displayName>
    <description>channel2 data output register</description>
    <addressOffset>0x30</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACC2DOR</name>
        <description>DAC channel2 data output</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SR</name>
    <displayName>SR</displayName>
    <description>status register</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DMAUDR2</name>
        <description>DAC channel2 DMA underrun
        flag</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMAUDR1</name>
        <description>DAC channel1 DMA underrun
        flag</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
</registers>
