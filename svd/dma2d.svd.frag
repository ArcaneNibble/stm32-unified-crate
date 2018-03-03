<description>DMA2D controller</description>
<groupName>DMA2D</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0xC00</size>
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
        <name>MODE</name>
        <description>DMA2D mode</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CEIE</name>
        <description>Configuration Error Interrupt
        Enable</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTCIE</name>
        <description>CLUT transfer complete interrupt
        enable</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CAEIE</name>
        <description>CLUT access error interrupt
        enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TWIE</name>
        <description>Transfer watermark interrupt
        enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIE</name>
        <description>Transfer complete interrupt
        enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIE</name>
        <description>Transfer error interrupt
        enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ABORT</name>
        <description>Abort</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SUSP</name>
        <description>Suspend</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>START</name>
        <description>Start</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ISR</name>
    <displayName>ISR</displayName>
    <description>Interrupt Status Register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CEIF</name>
        <description>Configuration error interrupt
        flag</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTCIF</name>
        <description>CLUT transfer complete interrupt
        flag</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CAEIF</name>
        <description>CLUT access error interrupt
        flag</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TWIF</name>
        <description>Transfer watermark interrupt
        flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIF</name>
        <description>Transfer complete interrupt
        flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIF</name>
        <description>Transfer error interrupt
        flag</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>IFCR</name>
    <displayName>IFCR</displayName>
    <description>interrupt flag clear register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CCEIF</name>
        <description>Clear configuration error interrupt
        flag</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CCTCIF</name>
        <description>Clear CLUT transfer complete interrupt
        flag</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CAECIF</name>
        <description>Clear CLUT access error interrupt
        flag</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTWIF</name>
        <description>Clear transfer watermark interrupt
        flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTCIF</name>
        <description>Clear transfer complete interrupt
        flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTEIF</name>
        <description>Clear Transfer error interrupt
        flag</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FGMAR</name>
    <displayName>FGMAR</displayName>
    <description>foreground memory address
    register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MA</name>
        <description>Memory address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FGOR</name>
    <displayName>FGOR</displayName>
    <description>foreground offset register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LO</name>
        <description>Line offset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>14</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BGMAR</name>
    <displayName>BGMAR</displayName>
    <description>background memory address
    register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MA</name>
        <description>Memory address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BGOR</name>
    <displayName>BGOR</displayName>
    <description>background offset register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LO</name>
        <description>Line offset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>14</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FGPFCCR</name>
    <displayName>FGPFCCR</displayName>
    <description>foreground PFC control
    register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>ALPHA</name>
        <description>Alpha value</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>AM</name>
        <description>Alpha mode</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CS</name>
        <description>CLUT size</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>START</name>
        <description>Start</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CCM</name>
        <description>CLUT color mode</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CM</name>
        <description>Color mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FGCOLR</name>
    <displayName>FGCOLR</displayName>
    <description>foreground color register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RED</name>
        <description>Red Value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>GREEN</name>
        <description>Green Value</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>BLUE</name>
        <description>Blue Value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BGPFCCR</name>
    <displayName>BGPFCCR</displayName>
    <description>background PFC control
    register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>ALPHA</name>
        <description>Alpha value</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>AM</name>
        <description>Alpha mode</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CS</name>
        <description>CLUT size</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>START</name>
        <description>Start</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CCM</name>
        <description>CLUT Color mode</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CM</name>
        <description>Color mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BGCOLR</name>
    <displayName>BGCOLR</displayName>
    <description>background color register</description>
    <addressOffset>0x28</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RED</name>
        <description>Red Value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>GREEN</name>
        <description>Green Value</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>BLUE</name>
        <description>Blue Value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FGCMAR</name>
    <displayName>FGCMAR</displayName>
    <description>foreground CLUT memory address
    register</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MA</name>
        <description>Memory Address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BGCMAR</name>
    <displayName>BGCMAR</displayName>
    <description>background CLUT memory address
    register</description>
    <addressOffset>0x30</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MA</name>
        <description>Memory address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OPFCCR</name>
    <displayName>OPFCCR</displayName>
    <description>output PFC control register</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CM</name>
        <description>Color mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OCOLR</name>
    <displayName>OCOLR</displayName>
    <description>output color register</description>
    <addressOffset>0x38</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>APLHA</name>
        <description>Alpha Channel Value</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>RED</name>
        <description>Red Value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>GREEN</name>
        <description>Green Value</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>BLUE</name>
        <description>Blue Value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OMAR</name>
    <displayName>OMAR</displayName>
    <description>output memory address register</description>
    <addressOffset>0x3C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MA</name>
        <description>Memory Address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OOR</name>
    <displayName>OOR</displayName>
    <description>output offset register</description>
    <addressOffset>0x40</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LO</name>
        <description>Line Offset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>14</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>NLR</name>
    <displayName>NLR</displayName>
    <description>number of line register</description>
    <addressOffset>0x44</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PL</name>
        <description>Pixel per lines</description>
        <bitOffset>16</bitOffset>
        <bitWidth>14</bitWidth>
      </field>
      <field>
        <name>NL</name>
        <description>Number of lines</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>LWR</name>
    <displayName>LWR</displayName>
    <description>line watermark register</description>
    <addressOffset>0x48</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LW</name>
        <description>Line watermark</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>AMTCR</name>
    <displayName>AMTCR</displayName>
    <description>AHB master timer configuration
    register</description>
    <addressOffset>0x4C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DT</name>
        <description>Dead Time</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>EN</name>
        <description>Enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FGCLUT</name>
    <displayName>FGCLUT</displayName>
    <description>FGCLUT</description>
    <addressOffset>0x400</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>APLHA</name>
        <description>APLHA</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>RED</name>
        <description>RED</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>GREEN</name>
        <description>GREEN</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>BLUE</name>
        <description>BLUE</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BGCLUT</name>
    <displayName>BGCLUT</displayName>
    <description>BGCLUT</description>
    <addressOffset>0x800</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>APLHA</name>
        <description>APLHA</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>RED</name>
        <description>RED</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>GREEN</name>
        <description>GREEN</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>BLUE</name>
        <description>BLUE</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
</registers>
