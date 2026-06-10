import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle } from '../components/UI'
import { portfolioData } from '../data/portfolio'

const BugAnalytics = () => {
  const { bugMetrics } = portfolioData

  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <SectionWrapper id="bug-analytics">
      <SectionTitle title="Bug Analytics Center" subtitle="Defect trends and insights" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Severity Distribution */}
        <motion.div
          className="glass rounded-lg p-6"
          variants={chartVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold mb-4">Severity Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={bugMetrics.bySeverity}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {bugMetrics.bySeverity.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0b0f14',
                  border: '1px solid #00ff88',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {bugMetrics.bySeverity.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Status Distribution */}
        <motion.div
          className="glass rounded-lg p-6"
          variants={chartVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-bold mb-4">Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={bugMetrics.byStatus}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {bugMetrics.byStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0b0f14',
                  border: '1px solid #00ff88',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {bugMetrics.byStatus.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Monthly Trend */}
        <motion.div
          className="glass rounded-lg p-6 lg:col-span-2"
          variants={chartVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-bold mb-4">Monthly Bug Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={bugMetrics.monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 136, 0.1)" />
              <XAxis stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0b0f14',
                  border: '1px solid #00ff88',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="bugs"
                stroke="#00ff88"
                dot={{ fill: '#00ff88' }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="resolved"
                stroke="#00c8ff"
                dot={{ fill: '#00c8ff' }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bug statistics summary */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Total Bugs Reported', value: 450, color: 'text-qa-blue' },
          { label: 'Critical Bugs', value: 0, color: 'text-qa-green' },
          { label: 'Resolution Rate', value: '99%', color: 'text-qa-green' },
          { label: 'Avg Resolution Time', value: '2 days', color: 'text-qa-blue' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="glass rounded-lg p-4 text-center"
            whileHover={{ y: -5 }}
          >
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-qa-muted mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default BugAnalytics
