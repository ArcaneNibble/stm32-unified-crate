<description>Digital camera interface</description>
<groupName>DCMI</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>CR</name>
    <displayName>CR</displayName>
    <description>control register 1</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>ENABLE</name>
        <description>DCMI enable</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EDM</name>
        <description>Extended data mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>FCRC</name>
        <description>Frame capture rate control</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>VSPOL</name>
        <description>Vertical synchronization
        polarity</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HSPOL</name>
        <description>Horizontal synchronization
        polarity</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PCKPOL</name>
        <description>Pixel clock polarity</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ESS</name>
        <description>Embedded synchronization
        select</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JPEG</name>
        <description>JPEG format</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CROP</name>
        <description>Crop feature</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CM</name>
        <description>Capture mode</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CAPTURE</name>
        <description>Capture enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SR</name>
    <displayName>SR</displayName>
    <description>status register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>FNE</name>
        <description>FIFO not empty</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>VSYNC</name>
        <description>VSYNC</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HSYNC</name>
        <description>HSYNC</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RIS</name>
    <displayName>RIS</displayName>
    <description>raw interrupt status register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>LINE_RIS</name>
        <description>Line raw interrupt status</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>VSYNC_RIS</name>
        <description>VSYNC raw interrupt status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ERR_RIS</name>
        <description>Synchronization error raw interrupt
        status</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVR_RIS</name>
        <description>Overrun raw interrupt
        status</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRAME_RIS</name>
        <description>Capture complete raw interrupt
        status</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>IER</name>
    <displayName>IER</displayName>
    <description>interrupt enable register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>LINE_IE</name>
        <description>Line interrupt enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>VSYNC_IE</name>
        <description>VSYNC interrupt enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ERR_IE</name>
        <description>Synchronization error interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVR_IE</name>
        <description>Overrun interrupt enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRAME_IE</name>
        <description>Capture complete interrupt
        enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>MIS</name>
    <displayName>MIS</displayName>
    <description>masked interrupt status
    register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>LINE_MIS</name>
        <description>Line masked interrupt
        status</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>VSYNC_MIS</name>
        <description>VSYNC masked interrupt
        status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ERR_MIS</name>
        <description>Synchronization error masked interrupt
        status</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVR_MIS</name>
        <description>Overrun masked interrupt
        status</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRAME_MIS</name>
        <description>Capture complete masked interrupt
        status</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ICR</name>
    <displayName>ICR</displayName>
    <description>interrupt clear register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>LINE_ISC</name>
        <description>line interrupt status
        clear</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>VSYNC_ISC</name>
        <description>Vertical synch interrupt status
        clear</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ERR_ISC</name>
        <description>Synchronization error interrupt status
        clear</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVR_ISC</name>
        <description>Overrun interrupt status
        clear</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FRAME_ISC</name>
        <description>Capture complete interrupt status
        clear</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ESCR</name>
    <displayName>ESCR</displayName>
    <description>embedded synchronization code
    register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>FEC</name>
        <description>Frame end delimiter code</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>LEC</name>
        <description>Line end delimiter code</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>LSC</name>
        <description>Line start delimiter code</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>FSC</name>
        <description>Frame start delimiter code</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ESUR</name>
    <displayName>ESUR</displayName>
    <description>embedded synchronization unmask
    register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>FEU</name>
        <description>Frame end delimiter unmask</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>LEU</name>
        <description>Line end delimiter unmask</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>LSU</name>
        <description>Line start delimiter
        unmask</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>FSU</name>
        <description>Frame start delimiter
        unmask</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CWSTRT</name>
    <displayName>CWSTRT</displayName>
    <description>crop window start</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>VST</name>
        <description>Vertical start line count</description>
        <bitOffset>16</bitOffset>
        <bitWidth>13</bitWidth>
      </field>
      <field>
        <name>HOFFCNT</name>
        <description>Horizontal offset count</description>
        <bitOffset>0</bitOffset>
        <bitWidth>14</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CWSIZE</name>
    <displayName>CWSIZE</displayName>
    <description>crop window size</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>VLINE</name>
        <description>Vertical line count</description>
        <bitOffset>16</bitOffset>
        <bitWidth>14</bitWidth>
      </field>
      <field>
        <name>CAPCNT</name>
        <description>Capture count</description>
        <bitOffset>0</bitOffset>
        <bitWidth>14</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DR</name>
    <displayName>DR</displayName>
    <description>data register</description>
    <addressOffset>0x28</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>Byte3</name>
        <description>Data byte 3</description>
        <bitOffset>24</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>Byte2</name>
        <description>Data byte 2</description>
        <bitOffset>16</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>Byte1</name>
        <description>Data byte 1</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
      <field>
        <name>Byte0</name>
        <description>Data byte 0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
</registers>
