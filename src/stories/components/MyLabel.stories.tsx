import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MyLabel } from '../../components/MyLabel'

const meta: ComponentMeta<typeof MyLabel> = {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: { control: 'color' }
  }
}
export default meta

const Template: ComponentStory<typeof MyLabel> = (
  args
): JSX.Element => {
  return <MyLabel {...args} />
}

export const Basic = Template.bind({})
Basic.args = { size: 'normal', allCaps: false }
export const AllCaps = Template.bind({})
AllCaps.args = { size: 'normal', allCaps: true }
export const Secondary = Template.bind({})
Secondary.args = { size: 'normal', color: 'secondary' }
export const Tertiary = Template.bind({})
Tertiary.args = { size: 'normal', color: 'tertiary' }

export const CustomFontColor = Template.bind({})
CustomFontColor.args = { size: 'h1', fontColor: '#5517ac' }
