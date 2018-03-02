<description>DMA controller</description>
<groupName>DMA</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>LISR</name>
    <displayName>LISR</displayName>
    <description>low interrupt status register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TCIF3</name>
        <description>Stream x transfer complete interrupt
        flag (x = 3..0)</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIF3</name>
        <description>Stream x half transfer interrupt flag
        (x=3..0)</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIF3</name>
        <description>Stream x transfer error interrupt flag
        (x=3..0)</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIF3</name>
        <description>Stream x direct mode error interrupt
        flag (x=3..0)</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FEIF3</name>
        <description>Stream x FIFO error interrupt flag
        (x=3..0)</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIF2</name>
        <description>Stream x transfer complete interrupt
        flag (x = 3..0)</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIF2</name>
        <description>Stream x half transfer interrupt flag
        (x=3..0)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIF2</name>
        <description>Stream x transfer error interrupt flag
        (x=3..0)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIF2</name>
        <description>Stream x direct mode error interrupt
        flag (x=3..0)</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FEIF2</name>
        <description>Stream x FIFO error interrupt flag
        (x=3..0)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIF1</name>
        <description>Stream x transfer complete interrupt
        flag (x = 3..0)</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIF1</name>
        <description>Stream x half transfer interrupt flag
        (x=3..0)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIF1</name>
        <description>Stream x transfer error interrupt flag
        (x=3..0)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIF1</name>
        <description>Stream x direct mode error interrupt
        flag (x=3..0)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FEIF1</name>
        <description>Stream x FIFO error interrupt flag
        (x=3..0)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIF0</name>
        <description>Stream x transfer complete interrupt
        flag (x = 3..0)</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIF0</name>
        <description>Stream x half transfer interrupt flag
        (x=3..0)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIF0</name>
        <description>Stream x transfer error interrupt flag
        (x=3..0)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIF0</name>
        <description>Stream x direct mode error interrupt
        flag (x=3..0)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FEIF0</name>
        <description>Stream x FIFO error interrupt flag
        (x=3..0)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>HISR</name>
    <displayName>HISR</displayName>
    <description>high interrupt status register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TCIF7</name>
        <description>Stream x transfer complete interrupt
        flag (x=7..4)</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIF7</name>
        <description>Stream x half transfer interrupt flag
        (x=7..4)</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIF7</name>
        <description>Stream x transfer error interrupt flag
        (x=7..4)</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIF7</name>
        <description>Stream x direct mode error interrupt
        flag (x=7..4)</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FEIF7</name>
        <description>Stream x FIFO error interrupt flag
        (x=7..4)</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIF6</name>
        <description>Stream x transfer complete interrupt
        flag (x=7..4)</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIF6</name>
        <description>Stream x half transfer interrupt flag
        (x=7..4)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIF6</name>
        <description>Stream x transfer error interrupt flag
        (x=7..4)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIF6</name>
        <description>Stream x direct mode error interrupt
        flag (x=7..4)</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FEIF6</name>
        <description>Stream x FIFO error interrupt flag
        (x=7..4)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIF5</name>
        <description>Stream x transfer complete interrupt
        flag (x=7..4)</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIF5</name>
        <description>Stream x half transfer interrupt flag
        (x=7..4)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIF5</name>
        <description>Stream x transfer error interrupt flag
        (x=7..4)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIF5</name>
        <description>Stream x direct mode error interrupt
        flag (x=7..4)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FEIF5</name>
        <description>Stream x FIFO error interrupt flag
        (x=7..4)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIF4</name>
        <description>Stream x transfer complete interrupt
        flag (x=7..4)</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIF4</name>
        <description>Stream x half transfer interrupt flag
        (x=7..4)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIF4</name>
        <description>Stream x transfer error interrupt flag
        (x=7..4)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIF4</name>
        <description>Stream x direct mode error interrupt
        flag (x=7..4)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FEIF4</name>
        <description>Stream x FIFO error interrupt flag
        (x=7..4)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>LIFCR</name>
    <displayName>LIFCR</displayName>
    <description>low interrupt flag clear
    register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CTCIF3</name>
        <description>Stream x clear transfer complete
        interrupt flag (x = 3..0)</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHTIF3</name>
        <description>Stream x clear half transfer interrupt
        flag (x = 3..0)</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTEIF3</name>
        <description>Stream x clear transfer error interrupt
        flag (x = 3..0)</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CDMEIF3</name>
        <description>Stream x clear direct mode error
        interrupt flag (x = 3..0)</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CFEIF3</name>
        <description>Stream x clear FIFO error interrupt flag
        (x = 3..0)</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTCIF2</name>
        <description>Stream x clear transfer complete
        interrupt flag (x = 3..0)</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHTIF2</name>
        <description>Stream x clear half transfer interrupt
        flag (x = 3..0)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTEIF2</name>
        <description>Stream x clear transfer error interrupt
        flag (x = 3..0)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CDMEIF2</name>
        <description>Stream x clear direct mode error
        interrupt flag (x = 3..0)</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CFEIF2</name>
        <description>Stream x clear FIFO error interrupt flag
        (x = 3..0)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTCIF1</name>
        <description>Stream x clear transfer complete
        interrupt flag (x = 3..0)</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHTIF1</name>
        <description>Stream x clear half transfer interrupt
        flag (x = 3..0)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTEIF1</name>
        <description>Stream x clear transfer error interrupt
        flag (x = 3..0)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CDMEIF1</name>
        <description>Stream x clear direct mode error
        interrupt flag (x = 3..0)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CFEIF1</name>
        <description>Stream x clear FIFO error interrupt flag
        (x = 3..0)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTCIF0</name>
        <description>Stream x clear transfer complete
        interrupt flag (x = 3..0)</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHTIF0</name>
        <description>Stream x clear half transfer interrupt
        flag (x = 3..0)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTEIF0</name>
        <description>Stream x clear transfer error interrupt
        flag (x = 3..0)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CDMEIF0</name>
        <description>Stream x clear direct mode error
        interrupt flag (x = 3..0)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CFEIF0</name>
        <description>Stream x clear FIFO error interrupt flag
        (x = 3..0)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>HIFCR</name>
    <displayName>HIFCR</displayName>
    <description>high interrupt flag clear
    register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CTCIF7</name>
        <description>Stream x clear transfer complete
        interrupt flag (x = 7..4)</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHTIF7</name>
        <description>Stream x clear half transfer interrupt
        flag (x = 7..4)</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTEIF7</name>
        <description>Stream x clear transfer error interrupt
        flag (x = 7..4)</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CDMEIF7</name>
        <description>Stream x clear direct mode error
        interrupt flag (x = 7..4)</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CFEIF7</name>
        <description>Stream x clear FIFO error interrupt flag
        (x = 7..4)</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTCIF6</name>
        <description>Stream x clear transfer complete
        interrupt flag (x = 7..4)</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHTIF6</name>
        <description>Stream x clear half transfer interrupt
        flag (x = 7..4)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTEIF6</name>
        <description>Stream x clear transfer error interrupt
        flag (x = 7..4)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CDMEIF6</name>
        <description>Stream x clear direct mode error
        interrupt flag (x = 7..4)</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CFEIF6</name>
        <description>Stream x clear FIFO error interrupt flag
        (x = 7..4)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTCIF5</name>
        <description>Stream x clear transfer complete
        interrupt flag (x = 7..4)</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHTIF5</name>
        <description>Stream x clear half transfer interrupt
        flag (x = 7..4)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTEIF5</name>
        <description>Stream x clear transfer error interrupt
        flag (x = 7..4)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CDMEIF5</name>
        <description>Stream x clear direct mode error
        interrupt flag (x = 7..4)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CFEIF5</name>
        <description>Stream x clear FIFO error interrupt flag
        (x = 7..4)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTCIF4</name>
        <description>Stream x clear transfer complete
        interrupt flag (x = 7..4)</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CHTIF4</name>
        <description>Stream x clear half transfer interrupt
        flag (x = 7..4)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CTEIF4</name>
        <description>Stream x clear transfer error interrupt
        flag (x = 7..4)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CDMEIF4</name>
        <description>Stream x clear direct mode error
        interrupt flag (x = 7..4)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CFEIF4</name>
        <description>Stream x clear FIFO error interrupt flag
        (x = 7..4)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S0CR</name>
    <displayName>S0CR</displayName>
    <description>stream x configuration
    register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CHSEL</name>
        <description>Channel selection</description>
        <bitOffset>25</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MBURST</name>
        <description>Memory burst transfer
        configuration</description>
        <bitOffset>23</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PBURST</name>
        <description>Peripheral burst transfer
        configuration</description>
        <bitOffset>21</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CT</name>
        <description>Current target (only in double buffer
        mode)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBM</name>
        <description>Double buffer mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PL</name>
        <description>Priority level</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PINCOS</name>
        <description>Peripheral increment offset
        size</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MSIZE</name>
        <description>Memory data size</description>
        <bitOffset>13</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PSIZE</name>
        <description>Peripheral data size</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MINC</name>
        <description>Memory increment mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PINC</name>
        <description>Peripheral increment mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CIRC</name>
        <description>Circular mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DIR</name>
        <description>Data transfer direction</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PFCTRL</name>
        <description>Peripheral flow controller</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIE</name>
        <description>Transfer complete interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIE</name>
        <description>Half transfer interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIE</name>
        <description>Transfer error interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIE</name>
        <description>Direct mode error interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EN</name>
        <description>Stream enable / flag stream ready when
        read low</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S0NDTR</name>
    <displayName>S0NDTR</displayName>
    <description>stream x number of data
    register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>NDT</name>
        <description>Number of data items to
        transfer</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S0PAR</name>
    <displayName>S0PAR</displayName>
    <description>stream x peripheral address
    register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PA</name>
        <description>Peripheral address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S0M0AR</name>
    <displayName>S0M0AR</displayName>
    <description>stream x memory 0 address
    register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M0A</name>
        <description>Memory 0 address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S0M1AR</name>
    <displayName>S0M1AR</displayName>
    <description>stream x memory 1 address
    register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M1A</name>
        <description>Memory 1 address (used in case of Double
        buffer mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S0FCR</name>
    <displayName>S0FCR</displayName>
    <description>stream x FIFO control register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000021</resetValue>
    <fields>
      <field>
        <name>FEIE</name>
        <description>FIFO error interrupt
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FS</name>
        <description>FIFO status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DMDIS</name>
        <description>Direct mode disable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FTH</name>
        <description>FIFO threshold selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>S1CR</name>
    <displayName>S1CR</displayName>
    <description>stream x configuration
    register</description>
    <addressOffset>0x28</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CHSEL</name>
        <description>Channel selection</description>
        <bitOffset>25</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MBURST</name>
        <description>Memory burst transfer
        configuration</description>
        <bitOffset>23</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PBURST</name>
        <description>Peripheral burst transfer
        configuration</description>
        <bitOffset>21</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CT</name>
        <description>Current target (only in double buffer
        mode)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBM</name>
        <description>Double buffer mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PL</name>
        <description>Priority level</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PINCOS</name>
        <description>Peripheral increment offset
        size</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MSIZE</name>
        <description>Memory data size</description>
        <bitOffset>13</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PSIZE</name>
        <description>Peripheral data size</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MINC</name>
        <description>Memory increment mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PINC</name>
        <description>Peripheral increment mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CIRC</name>
        <description>Circular mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DIR</name>
        <description>Data transfer direction</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PFCTRL</name>
        <description>Peripheral flow controller</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIE</name>
        <description>Transfer complete interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIE</name>
        <description>Half transfer interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIE</name>
        <description>Transfer error interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIE</name>
        <description>Direct mode error interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EN</name>
        <description>Stream enable / flag stream ready when
        read low</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S1NDTR</name>
    <displayName>S1NDTR</displayName>
    <description>stream x number of data
    register</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>NDT</name>
        <description>Number of data items to
        transfer</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S1PAR</name>
    <displayName>S1PAR</displayName>
    <description>stream x peripheral address
    register</description>
    <addressOffset>0x30</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PA</name>
        <description>Peripheral address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S1M0AR</name>
    <displayName>S1M0AR</displayName>
    <description>stream x memory 0 address
    register</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M0A</name>
        <description>Memory 0 address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S1M1AR</name>
    <displayName>S1M1AR</displayName>
    <description>stream x memory 1 address
    register</description>
    <addressOffset>0x38</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M1A</name>
        <description>Memory 1 address (used in case of Double
        buffer mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S1FCR</name>
    <displayName>S1FCR</displayName>
    <description>stream x FIFO control register</description>
    <addressOffset>0x3C</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000021</resetValue>
    <fields>
      <field>
        <name>FEIE</name>
        <description>FIFO error interrupt
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FS</name>
        <description>FIFO status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DMDIS</name>
        <description>Direct mode disable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FTH</name>
        <description>FIFO threshold selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>S2CR</name>
    <displayName>S2CR</displayName>
    <description>stream x configuration
    register</description>
    <addressOffset>0x40</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CHSEL</name>
        <description>Channel selection</description>
        <bitOffset>25</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MBURST</name>
        <description>Memory burst transfer
        configuration</description>
        <bitOffset>23</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PBURST</name>
        <description>Peripheral burst transfer
        configuration</description>
        <bitOffset>21</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CT</name>
        <description>Current target (only in double buffer
        mode)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBM</name>
        <description>Double buffer mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PL</name>
        <description>Priority level</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PINCOS</name>
        <description>Peripheral increment offset
        size</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MSIZE</name>
        <description>Memory data size</description>
        <bitOffset>13</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PSIZE</name>
        <description>Peripheral data size</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MINC</name>
        <description>Memory increment mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PINC</name>
        <description>Peripheral increment mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CIRC</name>
        <description>Circular mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DIR</name>
        <description>Data transfer direction</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PFCTRL</name>
        <description>Peripheral flow controller</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIE</name>
        <description>Transfer complete interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIE</name>
        <description>Half transfer interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIE</name>
        <description>Transfer error interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIE</name>
        <description>Direct mode error interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EN</name>
        <description>Stream enable / flag stream ready when
        read low</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S2NDTR</name>
    <displayName>S2NDTR</displayName>
    <description>stream x number of data
    register</description>
    <addressOffset>0x44</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>NDT</name>
        <description>Number of data items to
        transfer</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S2PAR</name>
    <displayName>S2PAR</displayName>
    <description>stream x peripheral address
    register</description>
    <addressOffset>0x48</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PA</name>
        <description>Peripheral address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S2M0AR</name>
    <displayName>S2M0AR</displayName>
    <description>stream x memory 0 address
    register</description>
    <addressOffset>0x4C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M0A</name>
        <description>Memory 0 address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S2M1AR</name>
    <displayName>S2M1AR</displayName>
    <description>stream x memory 1 address
    register</description>
    <addressOffset>0x50</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M1A</name>
        <description>Memory 1 address (used in case of Double
        buffer mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S2FCR</name>
    <displayName>S2FCR</displayName>
    <description>stream x FIFO control register</description>
    <addressOffset>0x54</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000021</resetValue>
    <fields>
      <field>
        <name>FEIE</name>
        <description>FIFO error interrupt
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FS</name>
        <description>FIFO status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DMDIS</name>
        <description>Direct mode disable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FTH</name>
        <description>FIFO threshold selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>S3CR</name>
    <displayName>S3CR</displayName>
    <description>stream x configuration
    register</description>
    <addressOffset>0x58</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CHSEL</name>
        <description>Channel selection</description>
        <bitOffset>25</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MBURST</name>
        <description>Memory burst transfer
        configuration</description>
        <bitOffset>23</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PBURST</name>
        <description>Peripheral burst transfer
        configuration</description>
        <bitOffset>21</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CT</name>
        <description>Current target (only in double buffer
        mode)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBM</name>
        <description>Double buffer mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PL</name>
        <description>Priority level</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PINCOS</name>
        <description>Peripheral increment offset
        size</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MSIZE</name>
        <description>Memory data size</description>
        <bitOffset>13</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PSIZE</name>
        <description>Peripheral data size</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MINC</name>
        <description>Memory increment mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PINC</name>
        <description>Peripheral increment mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CIRC</name>
        <description>Circular mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DIR</name>
        <description>Data transfer direction</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PFCTRL</name>
        <description>Peripheral flow controller</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIE</name>
        <description>Transfer complete interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIE</name>
        <description>Half transfer interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIE</name>
        <description>Transfer error interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIE</name>
        <description>Direct mode error interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EN</name>
        <description>Stream enable / flag stream ready when
        read low</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S3NDTR</name>
    <displayName>S3NDTR</displayName>
    <description>stream x number of data
    register</description>
    <addressOffset>0x5C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>NDT</name>
        <description>Number of data items to
        transfer</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S3PAR</name>
    <displayName>S3PAR</displayName>
    <description>stream x peripheral address
    register</description>
    <addressOffset>0x60</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PA</name>
        <description>Peripheral address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S3M0AR</name>
    <displayName>S3M0AR</displayName>
    <description>stream x memory 0 address
    register</description>
    <addressOffset>0x64</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M0A</name>
        <description>Memory 0 address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S3M1AR</name>
    <displayName>S3M1AR</displayName>
    <description>stream x memory 1 address
    register</description>
    <addressOffset>0x68</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M1A</name>
        <description>Memory 1 address (used in case of Double
        buffer mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S3FCR</name>
    <displayName>S3FCR</displayName>
    <description>stream x FIFO control register</description>
    <addressOffset>0x6C</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000021</resetValue>
    <fields>
      <field>
        <name>FEIE</name>
        <description>FIFO error interrupt
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FS</name>
        <description>FIFO status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DMDIS</name>
        <description>Direct mode disable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FTH</name>
        <description>FIFO threshold selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>S4CR</name>
    <displayName>S4CR</displayName>
    <description>stream x configuration
    register</description>
    <addressOffset>0x70</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CHSEL</name>
        <description>Channel selection</description>
        <bitOffset>25</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MBURST</name>
        <description>Memory burst transfer
        configuration</description>
        <bitOffset>23</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PBURST</name>
        <description>Peripheral burst transfer
        configuration</description>
        <bitOffset>21</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CT</name>
        <description>Current target (only in double buffer
        mode)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBM</name>
        <description>Double buffer mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PL</name>
        <description>Priority level</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PINCOS</name>
        <description>Peripheral increment offset
        size</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MSIZE</name>
        <description>Memory data size</description>
        <bitOffset>13</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PSIZE</name>
        <description>Peripheral data size</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MINC</name>
        <description>Memory increment mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PINC</name>
        <description>Peripheral increment mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CIRC</name>
        <description>Circular mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DIR</name>
        <description>Data transfer direction</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PFCTRL</name>
        <description>Peripheral flow controller</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIE</name>
        <description>Transfer complete interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIE</name>
        <description>Half transfer interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIE</name>
        <description>Transfer error interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIE</name>
        <description>Direct mode error interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EN</name>
        <description>Stream enable / flag stream ready when
        read low</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S4NDTR</name>
    <displayName>S4NDTR</displayName>
    <description>stream x number of data
    register</description>
    <addressOffset>0x74</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>NDT</name>
        <description>Number of data items to
        transfer</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S4PAR</name>
    <displayName>S4PAR</displayName>
    <description>stream x peripheral address
    register</description>
    <addressOffset>0x78</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PA</name>
        <description>Peripheral address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S4M0AR</name>
    <displayName>S4M0AR</displayName>
    <description>stream x memory 0 address
    register</description>
    <addressOffset>0x7C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M0A</name>
        <description>Memory 0 address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S4M1AR</name>
    <displayName>S4M1AR</displayName>
    <description>stream x memory 1 address
    register</description>
    <addressOffset>0x80</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M1A</name>
        <description>Memory 1 address (used in case of Double
        buffer mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S4FCR</name>
    <displayName>S4FCR</displayName>
    <description>stream x FIFO control register</description>
    <addressOffset>0x84</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000021</resetValue>
    <fields>
      <field>
        <name>FEIE</name>
        <description>FIFO error interrupt
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FS</name>
        <description>FIFO status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DMDIS</name>
        <description>Direct mode disable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FTH</name>
        <description>FIFO threshold selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>S5CR</name>
    <displayName>S5CR</displayName>
    <description>stream x configuration
    register</description>
    <addressOffset>0x88</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CHSEL</name>
        <description>Channel selection</description>
        <bitOffset>25</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MBURST</name>
        <description>Memory burst transfer
        configuration</description>
        <bitOffset>23</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PBURST</name>
        <description>Peripheral burst transfer
        configuration</description>
        <bitOffset>21</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CT</name>
        <description>Current target (only in double buffer
        mode)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBM</name>
        <description>Double buffer mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PL</name>
        <description>Priority level</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PINCOS</name>
        <description>Peripheral increment offset
        size</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MSIZE</name>
        <description>Memory data size</description>
        <bitOffset>13</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PSIZE</name>
        <description>Peripheral data size</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MINC</name>
        <description>Memory increment mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PINC</name>
        <description>Peripheral increment mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CIRC</name>
        <description>Circular mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DIR</name>
        <description>Data transfer direction</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PFCTRL</name>
        <description>Peripheral flow controller</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIE</name>
        <description>Transfer complete interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIE</name>
        <description>Half transfer interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIE</name>
        <description>Transfer error interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIE</name>
        <description>Direct mode error interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EN</name>
        <description>Stream enable / flag stream ready when
        read low</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S5NDTR</name>
    <displayName>S5NDTR</displayName>
    <description>stream x number of data
    register</description>
    <addressOffset>0x8C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>NDT</name>
        <description>Number of data items to
        transfer</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S5PAR</name>
    <displayName>S5PAR</displayName>
    <description>stream x peripheral address
    register</description>
    <addressOffset>0x90</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PA</name>
        <description>Peripheral address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S5M0AR</name>
    <displayName>S5M0AR</displayName>
    <description>stream x memory 0 address
    register</description>
    <addressOffset>0x94</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M0A</name>
        <description>Memory 0 address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S5M1AR</name>
    <displayName>S5M1AR</displayName>
    <description>stream x memory 1 address
    register</description>
    <addressOffset>0x98</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M1A</name>
        <description>Memory 1 address (used in case of Double
        buffer mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S5FCR</name>
    <displayName>S5FCR</displayName>
    <description>stream x FIFO control register</description>
    <addressOffset>0x9C</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000021</resetValue>
    <fields>
      <field>
        <name>FEIE</name>
        <description>FIFO error interrupt
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FS</name>
        <description>FIFO status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DMDIS</name>
        <description>Direct mode disable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FTH</name>
        <description>FIFO threshold selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>S6CR</name>
    <displayName>S6CR</displayName>
    <description>stream x configuration
    register</description>
    <addressOffset>0xA0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CHSEL</name>
        <description>Channel selection</description>
        <bitOffset>25</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MBURST</name>
        <description>Memory burst transfer
        configuration</description>
        <bitOffset>23</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PBURST</name>
        <description>Peripheral burst transfer
        configuration</description>
        <bitOffset>21</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CT</name>
        <description>Current target (only in double buffer
        mode)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBM</name>
        <description>Double buffer mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PL</name>
        <description>Priority level</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PINCOS</name>
        <description>Peripheral increment offset
        size</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MSIZE</name>
        <description>Memory data size</description>
        <bitOffset>13</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PSIZE</name>
        <description>Peripheral data size</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MINC</name>
        <description>Memory increment mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PINC</name>
        <description>Peripheral increment mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CIRC</name>
        <description>Circular mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DIR</name>
        <description>Data transfer direction</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PFCTRL</name>
        <description>Peripheral flow controller</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIE</name>
        <description>Transfer complete interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIE</name>
        <description>Half transfer interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIE</name>
        <description>Transfer error interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIE</name>
        <description>Direct mode error interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EN</name>
        <description>Stream enable / flag stream ready when
        read low</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S6NDTR</name>
    <displayName>S6NDTR</displayName>
    <description>stream x number of data
    register</description>
    <addressOffset>0xA4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>NDT</name>
        <description>Number of data items to
        transfer</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S6PAR</name>
    <displayName>S6PAR</displayName>
    <description>stream x peripheral address
    register</description>
    <addressOffset>0xA8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PA</name>
        <description>Peripheral address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S6M0AR</name>
    <displayName>S6M0AR</displayName>
    <description>stream x memory 0 address
    register</description>
    <addressOffset>0xAC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M0A</name>
        <description>Memory 0 address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S6M1AR</name>
    <displayName>S6M1AR</displayName>
    <description>stream x memory 1 address
    register</description>
    <addressOffset>0xB0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M1A</name>
        <description>Memory 1 address (used in case of Double
        buffer mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S6FCR</name>
    <displayName>S6FCR</displayName>
    <description>stream x FIFO control register</description>
    <addressOffset>0xB4</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000021</resetValue>
    <fields>
      <field>
        <name>FEIE</name>
        <description>FIFO error interrupt
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FS</name>
        <description>FIFO status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DMDIS</name>
        <description>Direct mode disable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FTH</name>
        <description>FIFO threshold selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>S7CR</name>
    <displayName>S7CR</displayName>
    <description>stream x configuration
    register</description>
    <addressOffset>0xB8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CHSEL</name>
        <description>Channel selection</description>
        <bitOffset>25</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MBURST</name>
        <description>Memory burst transfer
        configuration</description>
        <bitOffset>23</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PBURST</name>
        <description>Peripheral burst transfer
        configuration</description>
        <bitOffset>21</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ACK</name>
        <description>ACK</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CT</name>
        <description>Current target (only in double buffer
        mode)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBM</name>
        <description>Double buffer mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PL</name>
        <description>Priority level</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PINCOS</name>
        <description>Peripheral increment offset
        size</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MSIZE</name>
        <description>Memory data size</description>
        <bitOffset>13</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PSIZE</name>
        <description>Peripheral data size</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MINC</name>
        <description>Memory increment mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PINC</name>
        <description>Peripheral increment mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CIRC</name>
        <description>Circular mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DIR</name>
        <description>Data transfer direction</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PFCTRL</name>
        <description>Peripheral flow controller</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TCIE</name>
        <description>Transfer complete interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HTIE</name>
        <description>Half transfer interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TEIE</name>
        <description>Transfer error interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMEIE</name>
        <description>Direct mode error interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EN</name>
        <description>Stream enable / flag stream ready when
        read low</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S7NDTR</name>
    <displayName>S7NDTR</displayName>
    <description>stream x number of data
    register</description>
    <addressOffset>0xBC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>NDT</name>
        <description>Number of data items to
        transfer</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S7PAR</name>
    <displayName>S7PAR</displayName>
    <description>stream x peripheral address
    register</description>
    <addressOffset>0xC0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PA</name>
        <description>Peripheral address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S7M0AR</name>
    <displayName>S7M0AR</displayName>
    <description>stream x memory 0 address
    register</description>
    <addressOffset>0xC4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M0A</name>
        <description>Memory 0 address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S7M1AR</name>
    <displayName>S7M1AR</displayName>
    <description>stream x memory 1 address
    register</description>
    <addressOffset>0xC8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>M1A</name>
        <description>Memory 1 address (used in case of Double
        buffer mode)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>S7FCR</name>
    <displayName>S7FCR</displayName>
    <description>stream x FIFO control register</description>
    <addressOffset>0xCC</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000021</resetValue>
    <fields>
      <field>
        <name>FEIE</name>
        <description>FIFO error interrupt
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FS</name>
        <description>FIFO status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>DMDIS</name>
        <description>Direct mode disable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>FTH</name>
        <description>FIFO threshold selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
</registers>
