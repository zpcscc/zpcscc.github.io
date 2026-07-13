import Cascade from '@/components/Cascade';
import ResultTextarea from '@/components/ResultTextarea';
import Space from '@/components/Space';
import { provinceCityAreaCascadeData } from '@/generator/fieldConfig/form/cascades/province-city-china';
import { useState, type FC } from 'react';

const App: FC = () => {
  const [value, setValue] = useState<string[]>([]);

  const onChange = (value: string[]) => {
    setValue(value);
  };

  // 级联数据格式。二维数组，相当于把用户每个可能的选项都列出来。
  // const cascadeDataMock = [
  //   ['北京市', '东城区', '东城区'],
  //   ['北京市', '西城区', '西城区'],
  //   ['北京市', '朝阳区', '朝阳区'],
  //   ['北京市', '丰台区', '丰台区'],
  //   ['北京市', '石景山区', '石景山区'],
  //   ['北京市', '海淀区', '海淀区'],
  //   ['北京市', '门头沟区', '门头沟区'],
  //   ['北京市', '房山区', '房山区'],
  //   ['北京市', '通州区', '通州区'],
  //   ['北京市', '顺义区', '顺义区'],
  //   ['北京市', '昌平区', '昌平区'],
  //   ['北京市', '大兴区', '大兴区'],
  //   ['北京市', '怀柔区', '怀柔区'],
  //   ['北京市', '平谷区', '平谷区'],
  //   ['北京市', '密云区', '密云区'],
  //   ['北京市', '延庆区', '延庆区'],
  // ];

  return (
    <Space size={100} align='end'>
      {/* <Cascade
        level={3}
        cascadeData={[
          ['安徽省', '江苏省', '浙江省'],
          ['合肥市', '南京市', '杭州市'],
          ['蜀山区', '鼓楼区', '西湖区'],
        ]}
        placeholders={['请选择省份', '请选择城市', '请选择区县']}
      /> */}

      <Cascade
        value={value}
        level={3}
        showTextArea={true}
        placeholders={['请选择省份...', '请选择城市...', '请选择地区...', '请输入详细地址...']}
        // 级联数据
        cascadeData={provinceCityAreaCascadeData()}
        // 对内部的select组件进行配置
        selectOptions={{ size: 'large' }}
        // 对内部的textarea组件进行配置
        textAreaOptions={{ size: 'large' }}
        onChange={onChange}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;
