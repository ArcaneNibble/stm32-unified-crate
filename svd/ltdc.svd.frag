<description>LCD-TFT Controller</description>
<groupName>LTDC</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>SSCR</name>
    <displayName>SSCR</displayName>
    <description>Synchronization Size Configuration
    Register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>HSW</name>
        <description>Horizontal Synchronization Width (in
        units of pixel clock period)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
      <field>
        <name>VSH</name>
        <description>Vertical Synchronization Height (in
        units of horizontal scan line)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BPCR</name>
    <displayName>BPCR</displayName>
    <description>Back Porch Configuration
    Register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>AHBP</name>
        <description>Accumulated Horizontal back porch (in
        units of pixel clock period)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
      <field>
        <name>AVBP</name>
        <description>Accumulated Vertical back porch (in
        units of horizontal scan line)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>AWCR</name>
    <displayName>AWCR</displayName>
    <description>Active Width Configuration
    Register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>AAW</name>
        <description>Accumulated Active Width (in units of pixel clock period)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
      <field>
        <name>AAH</name>
        <description>Accumulated Active Height (in units of
        horizontal scan line)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TWCR</name>
    <displayName>TWCR</displayName>
    <description>Total Width Configuration
    Register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TOTALW</name>
        <description>Total Width (in units of pixel clock
        period)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
      <field>
        <name>TOTALH</name>
        <description>Total Height (in units of horizontal
        scan line)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>GCR</name>
    <displayName>GCR</displayName>
    <description>Global Control Register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <resetValue>0x00002220</resetValue>
    <fields>
      <field>
        <name>HSPOL</name>
        <description>Horizontal Synchronization
        Polarity</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>VSPOL</name>
        <description>Vertical Synchronization
        Polarity</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>DEPOL</name>
        <description>Data Enable Polarity</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PCPOL</name>
        <description>Pixel Clock Polarity</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>DEN</name>
        <description>Dither Enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>DRW</name>
        <description>Dither Red Width</description>
        <bitOffset>12</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DGW</name>
        <description>Dither Green Width</description>
        <bitOffset>8</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DBW</name>
        <description>Dither Blue Width</description>
        <bitOffset>4</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>LTDCEN</name>
        <description>LCD-TFT controller enable
        bit</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>SRCR</name>
    <displayName>SRCR</displayName>
    <description>Shadow Reload Configuration
    Register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>VBR</name>
        <description>Vertical Blanking Reload</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IMR</name>
        <description>Immediate Reload</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BCCR</name>
    <displayName>BCCR</displayName>
    <description>Background Color Configuration
    Register</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BC</name>
        <description>Background Color Red value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>24</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>IER</name>
    <displayName>IER</displayName>
    <description>Interrupt Enable Register</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RRIE</name>
        <description>Register Reload interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TERRIE</name>
        <description>Transfer Error Interrupt
        Enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FUIE</name>
        <description>FIFO Underrun Interrupt
        Enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LIE</name>
        <description>Line Interrupt Enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ISR</name>
    <displayName>ISR</displayName>
    <description>Interrupt Status Register</description>
    <addressOffset>0x38</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RRIF</name>
        <description>Register Reload Interrupt
        Flag</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TERRIF</name>
        <description>Transfer Error interrupt
        flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FUIF</name>
        <description>FIFO Underrun Interrupt
        flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LIF</name>
        <description>Line Interrupt flag</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ICR</name>
    <displayName>ICR</displayName>
    <description>Interrupt Clear Register</description>
    <addressOffset>0x3C</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CRRIF</name>
        <description>Clears Register Reload Interrupt
        Flag</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTERRIF</name>
        <description>Clears the Transfer Error Interrupt
        Flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CFUIF</name>
        <description>Clears the FIFO Underrun Interrupt
        flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CLIF</name>
        <description>Clears the Line Interrupt
        Flag</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>LIPCR</name>
    <displayName>LIPCR</displayName>
    <description>Line Interrupt Position Configuration
    Register</description>
    <addressOffset>0x40</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LIPOS</name>
        <description>Line Interrupt Position</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CPSR</name>
    <displayName>CPSR</displayName>
    <description>Current Position Status
    Register</description>
    <addressOffset>0x44</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CXPOS</name>
        <description>Current X Position</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>CYPOS</name>
        <description>Current Y Position</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CDSR</name>
    <displayName>CDSR</displayName>
    <description>Current Display Status
    Register</description>
    <addressOffset>0x48</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x0000000F</resetValue>
    <fields>
      <field>
        <name>HSYNCS</name>
        <description>Horizontal Synchronization display
        Status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>VSYNCS</name>
        <description>Vertical Synchronization display
        Status</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HDES</name>
        <description>Horizontal Data Enable display
        Status</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>VDES</name>
        <description>Vertical Data Enable display
        Status</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1CR</name>
    <displayName>L1CR</displayName>
    <description>Layerx Control Register</description>
    <addressOffset>0x84</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CLUTEN</name>
        <description>Color Look-Up Table Enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>COLKEN</name>
        <description>Color Keying Enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LEN</name>
        <description>Layer Enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1WHPCR</name>
    <displayName>L1WHPCR</displayName>
    <description>Layerx Window Horizontal Position
    Configuration Register</description>
    <addressOffset>0x88</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>WHSPPOS</name>
        <description>Window Horizontal Stop
        Position</description>
        <bitOffset>16</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
      <field>
        <name>WHSTPOS</name>
        <description>Window Horizontal Start
        Position</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1WVPCR</name>
    <displayName>L1WVPCR</displayName>
    <description>Layerx Window Vertical Position
    Configuration Register</description>
    <addressOffset>0x8C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>WVSPPOS</name>
        <description>Window Vertical Stop
        Position</description>
        <bitOffset>16</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>WVSTPOS</name>
        <description>Window Vertical Start
        Position</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1CKCR</name>
    <displayName>L1CKCR</displayName>
    <description>Layerx Color Keying Configuration
    Register</description>
    <addressOffset>0x90</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CKRED</name>
        <description>Color Key Red value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>CKGREEN</name>
        <description>Color Key Green value</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>CKBLUE</name>
        <description>Color Key Blue value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1PFCR</name>
    <displayName>L1PFCR</displayName>
    <description>Layerx Pixel Format Configuration
    Register</description>
    <addressOffset>0x94</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PF</name>
        <description>Pixel Format</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1CACR</name>
    <displayName>L1CACR</displayName>
    <description>Layerx Constant Alpha Configuration
    Register</description>
    <addressOffset>0x98</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CONSTA</name>
        <description>Constant Alpha</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1DCCR</name>
    <displayName>L1DCCR</displayName>
    <description>Layerx Default Color Configuration
    Register</description>
    <addressOffset>0x9C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DCALPHA</name>
        <description>Default Color Alpha</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DCRED</name>
        <description>Default Color Red</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DCGREEN</name>
        <description>Default Color Green</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DCBLUE</name>
        <description>Default Color Blue</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1BFCR</name>
    <displayName>L1BFCR</displayName>
    <description>Layerx Blending Factors Configuration
    Register</description>
    <addressOffset>0xA0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000607</resetValue>
    <fields>
      <field>
        <name>BF1</name>
        <description>Blending Factor 1</description>
        <bitOffset>8</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>BF2</name>
        <description>Blending Factor 2</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1CFBAR</name>
    <displayName>L1CFBAR</displayName>
    <description>Layerx Color Frame Buffer Address
    Register</description>
    <addressOffset>0xAC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CFBADD</name>
        <description>Color Frame Buffer Start
        Address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1CFBLR</name>
    <displayName>L1CFBLR</displayName>
    <description>Layerx Color Frame Buffer Length
    Register</description>
    <addressOffset>0xB0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CFBP</name>
        <description>Color Frame Buffer Pitch in
        bytes</description>
        <bitOffset>16</bitOffset>
        <bitWidth>13</bitWidth>
      </field>
      <field>
        <name>CFBLL</name>
        <description>Color Frame Buffer Line
        Length</description>
        <bitOffset>0</bitOffset>
        <bitWidth>13</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1CFBLNR</name>
    <displayName>L1CFBLNR</displayName>
    <description>Layerx ColorFrame Buffer Line Number
    Register</description>
    <addressOffset>0xB4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CFBLNBR</name>
        <description>Frame Buffer Line Number</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L1CLUTWR</name>
    <displayName>L1CLUTWR</displayName>
    <description>Layerx CLUT Write Register</description>
    <addressOffset>0xC4</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CLUTADD</name>
        <description>CLUT Address</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>RED</name>
        <description>Red value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>GREEN</name>
        <description>Green value</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>BLUE</name>
        <description>Blue value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2CR</name>
    <displayName>L2CR</displayName>
    <description>Layerx Control Register</description>
    <addressOffset>0x104</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CLUTEN</name>
        <description>Color Look-Up Table Enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>COLKEN</name>
        <description>Color Keying Enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LEN</name>
        <description>Layer Enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2WHPCR</name>
    <displayName>L2WHPCR</displayName>
    <description>Layerx Window Horizontal Position
    Configuration Register</description>
    <addressOffset>0x108</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>WHSPPOS</name>
        <description>Window Horizontal Stop
        Position</description>
        <bitOffset>16</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
      <field>
        <name>WHSTPOS</name>
        <description>Window Horizontal Start
        Position</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2WVPCR</name>
    <displayName>L2WVPCR</displayName>
    <description>Layerx Window Vertical Position
    Configuration Register</description>
    <addressOffset>0x10C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>WVSPPOS</name>
        <description>Window Vertical Stop
        Position</description>
        <bitOffset>16</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
      <field>
        <name>WVSTPOS</name>
        <description>Window Vertical Start
        Position</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2CKCR</name>
    <displayName>L2CKCR</displayName>
    <description>Layerx Color Keying Configuration
    Register</description>
    <addressOffset>0x110</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CKRED</name>
        <description>Color Key Red value</description>
        <bitOffset>15</bitOffset>
        <bitWidth>9</bitWidth>
      </field>
      <field>
        <name>CKGREEN</name>
        <description>Color Key Green value</description>
        <bitOffset>8</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>CKBLUE</name>
        <description>Color Key Blue value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2PFCR</name>
    <displayName>L2PFCR</displayName>
    <description>Layerx Pixel Format Configuration
    Register</description>
    <addressOffset>0x114</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PF</name>
        <description>Pixel Format</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2CACR</name>
    <displayName>L2CACR</displayName>
    <description>Layerx Constant Alpha Configuration
    Register</description>
    <addressOffset>0x118</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CONSTA</name>
        <description>Constant Alpha</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2DCCR</name>
    <displayName>L2DCCR</displayName>
    <description>Layerx Default Color Configuration
    Register</description>
    <addressOffset>0x11C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DCALPHA</name>
        <description>Default Color Alpha</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DCRED</name>
        <description>Default Color Red</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DCGREEN</name>
        <description>Default Color Green</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>DCBLUE</name>
        <description>Default Color Blue</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2BFCR</name>
    <displayName>L2BFCR</displayName>
    <description>Layerx Blending Factors Configuration
    Register</description>
    <addressOffset>0x120</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000607</resetValue>
    <fields>
      <field>
        <name>BF1</name>
        <description>Blending Factor 1</description>
        <bitOffset>8</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>BF2</name>
        <description>Blending Factor 2</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2CFBAR</name>
    <displayName>L2CFBAR</displayName>
    <description>Layerx Color Frame Buffer Address
    Register</description>
    <addressOffset>0x12C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CFBADD</name>
        <description>Color Frame Buffer Start
        Address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2CFBLR</name>
    <displayName>L2CFBLR</displayName>
    <description>Layerx Color Frame Buffer Length
    Register</description>
    <addressOffset>0x130</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CFBP</name>
        <description>Color Frame Buffer Pitch in
        bytes</description>
        <bitOffset>16</bitOffset>
        <bitWidth>13</bitWidth>
      </field>
      <field>
        <name>CFBLL</name>
        <description>Color Frame Buffer Line
        Length</description>
        <bitOffset>0</bitOffset>
        <bitWidth>13</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2CFBLNR</name>
    <displayName>L2CFBLNR</displayName>
    <description>Layerx ColorFrame Buffer Line Number
    Register</description>
    <addressOffset>0x134</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CFBLNBR</name>
        <description>Frame Buffer Line Number</description>
        <bitOffset>0</bitOffset>
        <bitWidth>11</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>L2CLUTWR</name>
    <displayName>L2CLUTWR</displayName>
    <description>Layerx CLUT Write Register</description>
    <addressOffset>0x144</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CLUTADD</name>
        <description>CLUT Address</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>RED</name>
        <description>Red value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>GREEN</name>
        <description>Green value</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>BLUE</name>
        <description>Blue value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
</registers>
